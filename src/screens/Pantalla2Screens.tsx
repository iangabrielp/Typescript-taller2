import React, { useState } from 'react'
import { Alert, ImageBackground, StatusBar, Text, View } from 'react-native'
import { InputComponents } from '../components/InputComponents';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { ButtonComponent } from '../components/ButtonComponents';
import { BodyComponents } from '../components/BodyComponents';
import { styles } from '../theme/app.theme';

//Interface-objeto
interface FormLogin {
  email: string;
  password: string;
}

// interface_ vector objetos
interface User {
  id: number;
  email: string;
  password: string;
}

export const Pantalla2Screens = () => {
  // arreglo de usuarios: permitir inicio de sesion
  const users: User[] = [
    { id: 1, email: 'gabrie.l@hotmail.es', password: '12345' },
    { id: 1, email: 'dennis.l@hotmail.es', password: '1234578' }
  ];

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
    console.log(formLogin);
  }

  //funcion verificar si existe el correo y contraseña
  const verifyUser = (): User => {
    const existUser = users.filter(user => user.email === formLogin.email
      && user.password === formLogin.password)[0];
    return existUser;
  }
  return (


    <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/1560833158/es/foto/controlador-de-juego-con-teclado-iluminado-de-color-p%C3%BArpura-en-medio-de-varios-dispositivos.webp?b=1&s=170667a&w=0&k=20&c=yGnmCyFisSDXTqkNOb5uCi96NsG3TjuC8fg6UfWlmXc='}}
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
        <ButtonComponent textButton='Iniciar' actionButton={handleSigIn} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
          <Text style={styles.textRedirection}>
            No tienetes cuentas? Registrate ahora</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )

}
