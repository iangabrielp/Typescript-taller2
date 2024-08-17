import React, { useState } from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native'
import { StatusBar } from 'react-native'
import { styles } from '../../theme/app.theme'
import { CardProducts } from './components/CardProducts';
import { TitleComponent } from '../../components/TitleComponents';
import { BodyComponents } from '../../components/BodyComponents';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SECUNDARY_COLOR } from '../../commons/Constants.color';
import { ModalCar } from './components/ModalCar';

// intreface- arreglo productos
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

// interface - arreglo carrito de compras
export interface Car {
  id: number;
  name: string;
  price: number;
  totalQuantity: number;
}

export const HomeScreens = () => {
  // arreglo con la lista de productos
  const products: Product[] = [
    { id: 1, name: 'FORNITE', price: 7.80, stock: 7, pathImage: 'https://i0.wp.com/interactiva.uvic.cat/bloc/wp-content/uploads/sites/2/2018/03/fortnite-pc-ps4-xbox-one_314820.jpg?fit=973%2C547&ssl=1' },
    { id: 2, name: 'FREE FIRE', price: 8.00, stock: 6, pathImage: 'https://statics.launion.digital/2022/02/crop/620adc8666918__940x620.webp' },
    { id: 3, name: 'DESTINY', price: 7.80, stock: 5, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0OTIwd36C8uC58NQfIKeLS9EnIAU32L4Xg&s' },
    { id: 4, name: 'CALL OF DUTY', price: 9.00, stock: 8, pathImage: 'https://elcomercio.pe/resizer/uu420NOiFwF-QHXf82D8y-fyC4s=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HXLG6GEJPFEH3EGP3P3OI67X7E.jpg' },
    { id: 5, name: 'MINECRAFT', price: 3.80, stock: 7, pathImage: 'https://depor.com/resizer/GXghNMKayzdNqA9auOe1HWumNig=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/R22B42KRJVFNXK2BVQXWZ6PBRU.jpg' },
    { id: 6, name: 'IT TAKES TOW', price: 5.00, stock: 7, pathImage: 'https://i.blogs.es/331b17/1366_2000/1366_2000.jpeg' },
    { id: 7, name: 'ZOMBS ROYALE', price: 7.00, stock: 7, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_2v_s8gplCy9xmyxP8UhTVAsGGbnoib2Pg&s' },
    { id: 8, name: 'BATTLEGROUNDS', price: 8.00, stock: 6, pathImage: 'https://blog.soltekonline.com/content/images/2021/07/image-64.png' },
    { id: 9, name: 'LEAGUE LEGENDS', price: 7.99, stock: 6, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7g2I-d-eJo8_y4HoIvji12jwBEswsxH1Cg&s' },

  ];

  //hooh useState: manipular el arreglo de lista productos
  const [productsState, setProductsState] = useState(products);

  // hook useState : manipular el aarreglo del carrito de compras
  const [car, setCar] = useState<Car[]>([]);
  // hook useState: manipular la visibilidad del modal
  const [showModal, setShowModal] = useState<boolean>(false)

  // funcion para actualizar la informacion de la lista producto
  const changeStockProduct = (idProduct: number, quantity: number) => {
    // Arreglo con el stock actualizado
    const updateStock = productsState.map(product => product.id === idProduct
      ? { ...product, stock: product.stock - quantity }
      : product);
    //Actualizar el productState
    setProductsState(updateStock);

    // llamar funcion agregar carrito
    addProduct(idProduct, quantity);

  }
  // funcion agregar los productos al carrito
  const addProduct = (idProduct: number, quantity: number) => {
    const product = productsState.find(product => product.id === idProduct);

    // controlar si el producto no ha sido encontrado
    if (!product) {
      return;
    }

    // si el producto fue encontrado 
    const newProductCar: Car = {
      id: product.id,
      name: product.name,
      price: product.price,
      totalQuantity: quantity
    }

    // agregar en el carrito de compras
    setCar([...car, newProductCar]);
    console.log(car);

  }

  return (

    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/high/shadow-midas-fortnite-purple-art-uj77rr66xfp33m2j.webp' }}
      style={styles.fondoIni}>
      <View>
        <StatusBar translucent={true} />
        <View style={styles.contentHeaderHome}>
          <Text style={styles.titulopant2}>Games</Text>
          <View style={{
            ...styles.iconCard,
            paddingHorizontal: 33
          }}>
            <Text style={styles.textIconCar}>{CardProducts.length}</Text>
            <Icon
              name='shopping-cart'
              size={33}
              color={SECUNDARY_COLOR}
              onPress={() => setShowModal(!showModal)} />
          </View>
        </View>
        <BodyComponents>
          <FlatList
            data={productsState}
            renderItem={({ item }) => <CardProducts product={item}
              changeStockProduct={changeStockProduct} />}
            keyExtractor={item => item.id.toString()} />
        </BodyComponents>
        <ModalCar
          isVisible={showModal}
          car={car}
          setShowModal={() => setShowModal(!showModal)} />
      </View>
    </ImageBackground>
  )
}
