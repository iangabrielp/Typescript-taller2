import React, { useState } from 'react'
import { Alert, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { InputComponents } from '../components/InputComponents';

import { CommonActions, useNavigation } from '@react-navigation/native'
import { ButtonComponent } from '../components/ButtonComponents';
import { BodyComponents } from '../components/BodyComponents';
import { styles } from '../theme/app.theme';
import { User } from '../navigator/StackNavigator';

//interface-props
interface Props {
  users:User[]; // arreglo con la lista de usuarios
}

//Interface-objeto
interface FormLogin {
  email: string;
  password: string;
}



export const Pantalla2Screens = ({users}: Props) => {
  

  //hook useState: maniúlar el estado del formulario 
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: '',});

  // hook useState: permitir que la contraseña sea visible o no
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //hook useNavigation: permitir navegar de una pantalla a otra
  const navigation = useNavigation();


  // funcion que permita actuzalizar el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value });
  }

  //funcion que permita iniciar sesion
  const handleSigIn = () => {
    if (!formLogin.email || !formLogin.password) {
      Alert.alert(
        "Error",
        "Por favor, completar todos los campos"
      )
      return;}

    // validar si el correo y contraseña existe
    if (!verifyUser()) {
      Alert.alert(
        "Error",
        "Correo y/o contraseña incorrecta"
      );
      return;
    }

    // si uso un usuario registrado navego al HomeScreens
    navigation.dispatch(CommonActions.navigate({name:'Home'}))
    //console.log(formLogin);
  }

  //funcion verificar si existe el correo y contraseña
  const verifyUser = (): User => {
    const existUser = users.filter(user => user.email === formLogin.email
      && user.password === formLogin.password)[0];
    return existUser;
  }
  return (


    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/hd/dope-fortnite-ffm9p3g8x37c8c7t.jpg'}}
      style={styles.fondoIni}>
      <View >
        <StatusBar translucent={true} />
        <View>
          <Text style={styles.titulopant2}>Iniciar Sesion</Text>
        </View>
        <View style={styles.contentInput}>
          <InputComponents input='Correo' handleSetValues={handleSetValues} name='email' />
          <InputComponents input='Contraseña' handleSetValues={handleSetValues} name='password'
            isPassword={hiddenPassword} hasIcon={true} actionIcon={() => setHiddenPassword(!hiddenPassword)} />
        </View>
        <ButtonComponent textButton='Entrar' actionButton={handleSigIn} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
          <Text style={styles.textRedirection}>
            No tienetes cuentas? Registrate ahora</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )

}
