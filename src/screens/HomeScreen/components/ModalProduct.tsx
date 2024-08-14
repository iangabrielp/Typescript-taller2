import React, { useState } from 'react'
import { Text, useWindowDimensions, View, StyleSheet, Image } from 'react-native';
import { Modal } from 'react-native'
import { styles } from '../../../theme/app.theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product } from '../HomeScreens';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { INI_COLOR, PRIMARY_COLOR } from '../../../commons/Constants.color';

// interface-Props
interface Props {
  product: Product;
  isVisible: boolean;
  setShowModal: () => void; // funcion para la visibilidad del modal
  changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const ModalProduct = ({ isVisible, setShowModal, product, changeStockProduct }: Props) => {
  // hook useWindowsDimension: tamaño de la pantalla
  const { width } = useWindowDimensions();
  // hook useState :manipular el estado de la cantidad
  const [quantity, setQuantity] = useState<number>(1);

  //Funcion que actualiza en valor de la cantidad- contador
  const handleChangeQuantity = (value: number) => {
    setQuantity(quantity + value)
  }

  // funcion agregar productos al carrito
  const handleAddProduct = () => {
    // actualizar stock
    changeStockProduct(product.id, quantity);
    // reinicar quantity
    setQuantity(1);
    // cerra modal
    setShowModal();
  }

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <View style={styles.contentPrincipal}>
        <View style={{
          ...styles.contentModal,
          width: width * 0.90
        }}>
          <View style={styles.headerModal}>
            <Text style={styles.titleModal}>{product.name} - ${product.price.toFixed(2)}</Text>
            <View style={styles.iconCard}>
              <Icon
                name='cancel'
                size={27}
                color={INI_COLOR}
                onPress={setShowModal} />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri: product.pathImage
              }}
              style={styles.imageModal} />
          </View>
          {
            (product.stock === 0)
              ? <Text style={styles.messageStock}>Producto Agotado</Text>
              : <View>
                <View style={styles.contentQuantity}>
                  <TouchableOpacity
                    onPress={() => handleChangeQuantity(1)}
                    disabled={quantity === product.stock}
                    style={styles.buttonQuantity}>
                    <Text style={styles.textButtonQuantity}>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.textQuantity}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleChangeQuantity(-1)}
                    disabled={quantity === 1}
                    style={styles.buttonQuantity}>
                    <Text style={styles.textButtonQuantity}>-</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={styles.textQuantity}>
                    Total:{(product.price * quantity).toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={handleAddProduct}
                  style={styles.buttonAddCard}>
                  <Text style={styles.textButtonAddCard}> Agregar al Carrito</Text>
                </TouchableOpacity>
              </View>
          }
        </View>
      </View>
    </Modal>
  )
}
