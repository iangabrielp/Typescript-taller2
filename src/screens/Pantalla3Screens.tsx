import React, { useState } from 'react'
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { InputComponents } from '../components/InputComponents';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../components/ButtonComponents';
import { styles } from '../theme/app.theme';


//Interface - formulario Registro
interface FormRegister {
  nombre: string;
  apellido: string,
  email: string;
  password: string;
}

export const Pantalla3Screens = () => {
  // hook useState 

  const [formRegister, setformRegister] = useState<FormRegister>({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });

  // hook useState: permitir que la contraseña sea visible o no
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //hook useNavigation: permitir navegar de una pantalla a otra
  const navigation = useNavigation();


  //funcion que actualice el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    setformRegister({ ...formRegister, [name]: value });
  }
  //funcion que permita registrar usuario
  const handleSignUp = () => {
    console.log(formRegister);
  }

  return (
    <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/1858114279/es/foto/entretenimiento-de-juegos-controlador-de-consola-actividad-de-videojuegos.webp?b=1&s=170667a&w=0&k=20&c=jSKyCs1cKu95BeIqh7RpkQBS5XZWq3FOESHKi56aVKo='}}
      style={styles.fondoIni}>
      <View>
        <StatusBar translucent={true} />
        <View>
          <Text style={styles.titulopant2}>Registrate</Text>
        </View>
        <View style={styles.contentInput}>
          <InputComponents input='Nombre' handleSetValues={handleSetValues} name='nombre' />
          <InputComponents input='Apellido' handleSetValues={handleSetValues} name='apellido' />
          <InputComponents input='Correo' handleSetValues={handleSetValues} name='email' />
          <InputComponents input='Contraseña' handleSetValues={handleSetValues} name='password'
            isPassword={hiddenPassword} hasIcon={true} actionIcon={() => setHiddenPassword(!hiddenPassword)}/>
        </View>
        <ButtonComponent textButton='Registrar' actionButton={handleSignUp} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={styles.textRedirection}>
            ya tienes una cuenta? Iniciar Sesion ahora</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}