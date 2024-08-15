import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreens'
import { styles } from '../../../theme/app.theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {  INI_COLOR } from '../../../commons/Constants.color'
import { ModalProduct } from './ModalProduct'

//interface - Props
interface Props {
    product: Product;
    changeStockProduct: (idProduct:number,quantity:number) => void;
}

export const CardProducts = ({ product, changeStockProduct }: Props) => {
    //hook useState: se hace visible o no
     const [showModal, setShowModal] = useState <boolean>(false);
     
    return (
        <View>
        <View style={styles.contentCard}>
            <Image
                source={{
                    uri: product.pathImage
                }}
                style={styles.imageCard} />
            <View>
                <Text style={styles.titleCard}>{product.name} </Text>
                <Text style={styles.priceCard}>Precio: ${product.price.toFixed(2)}</Text>
            </View>
            <View style= {styles.iconCard}>
                <Icon 
                name='shopping-cart' size={30} 
                color={INI_COLOR}
                onPress={() => setShowModal (!showModal)}/>
            </View>
        </View>
        <ModalProduct 
        isVisible={showModal} 
        setShowModal={() => setShowModal (!showModal)}
        product={product}
        changeStockProduct={changeStockProduct}/>
        </View>
    )
}
