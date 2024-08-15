import React from 'react'
import { FlatList, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Modal } from 'react-native'
import { Car } from '../HomeScreens';
import { styles } from '../../../theme/app.theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { INI_COLOR, SECUNDARY_COLOR } from '../../../commons/Constants.color';
import { ImageBackground } from 'react-native';
// interface - Props
interface Props {
  isVisible: boolean;
  setShowModal: () => void; //funcion para cerrar el modal
  car: Car[]; // arreglo con la lista de productos en el carrito
}

export const ModalCar = ({ isVisible, setShowModal, car }: Props) => {

  const { width } = useWindowDimensions();

  //Funcion para calcular el total a pagar
  const totalPay =(): number =>{
    let total: number =0;
    car.forEach (product => {
      total +=product.price*product.totalQuantity
    });
    return total;
    
  }

  // enviar la compra
  const handleSendInfo = () =>{
    // cerrar el modal
    setShowModal();
  }

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/high/shadow-midas-fortnite-purple-art-uj77rr66xfp33m2j.webp' }}
      style={styles.fondoIni}>
      <View style={styles.contentPrincipal}>
        <View style={{
          ...styles.contentModal,
          width: width * 0.80
        }}>
          <View style={styles.headerModal}>
            <Text style={styles.titleModal}>D´Games</Text>
            <View style={styles.iconCard}>
              <Icon
                name='cancel'
                size={27}
                color={INI_COLOR}
                onPress={setShowModal} />
            </View>
          </View>
          <View style={styles.headerTable}>
            <Text style={styles.textHeaderInf}>Juegos</Text>
            <View style={styles.headerTableInf}>
              <Text style={{
                ...styles.textHeaderInf,
                marginHorizontal: 10
              }}>Precio</Text>
              <Text style={{
                ...styles.textHeaderInf,
                marginHorizontal: 10
              }}>Cant.</Text>
              <Text style={{
                ...styles.textHeaderInf,
                marginHorizontal: 10
              }}>Total</Text>
            </View>
          </View>
          <FlatList
            data={car}
            renderItem={({ item }) =>
              <View style={styles.headerTable}>
                <Text style={{ color: SECUNDARY_COLOR}}>{item.name}</Text>
                <View style={styles.headerTableInf}>
                <Text style={{marginHorizontal:10, color: SECUNDARY_COLOR}}> ${item.price.toFixed(2)}</Text>
                <Text style={{paddingHorizontal:14, color: SECUNDARY_COLOR}}>{item.totalQuantity}</Text>
                <Text style={{marginHorizontal:10, color: SECUNDARY_COLOR}}> ${(item.price * item.totalQuantity).toFixed(2)}</Text>
                </View>

              </View>
            }
            keyExtractor={item => item.id.toString()} />
            <View style={{alignItems:'flex-end',}}>
              <Text style={styles.textTotalPay}> 
                Total  a pagar: ${totalPay().toFixed(2)}</Text>
            </View>
            <TouchableOpacity 
        onPress={handleSendInfo}
        style={styles.buttonAddCard}>
          <Text style={styles.textButtonAddCard}> Comprar</Text>
        </TouchableOpacity>
        </View>
        
      </View>
      </ImageBackground>
    </Modal>
  )
}
