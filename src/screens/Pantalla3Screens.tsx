import React, { useState } from 'react'
import { Alert, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { InputComponents } from '../components/InputComponents';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../components/ButtonComponents';
import { styles } from '../theme/app.theme';
import { User } from '../navigator/StackNavigator';
import { SECUNDARY_COLOR } from '../commons/Constants.color';

// interface - Props
interface Props{
  users:User[];// arreglo con las lista de usuarios
  handleAddUser:(user:User) => void;// funcion para añadir nuevos elementos al arreglo

}

//Interface - formulario Registro
interface FormRegister {
  nombre: string;
  apellido: string,
  email: string;
  password: string;
}

export const Pantalla3Screens = ({users, handleAddUser}: Props) => {
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
    // validar que los campos se encuentren llenos
    if(!formRegister.email || !formRegister.password){
      // Mensaje de aviso
      Alert.alert(
        "Error",
        "Por favor, completar todos los campos"
      );
      return;
    }

    //validar que no se registre un usuario ya existente
    if (verifyUser() != null){
      Alert.alert(
        "Error",
        "El correo ya esta registrado"
      );
      return;

    }

    //Generar la informacion del nuevo usuario 
    const getIdUsers =  users.map(user => user.id); // [1,2]
    // generando el id del nuevo usuario
    const getNewId = Math.max(... getIdUsers) +1;
    // crear el nuevo usuario - nuevo objeto de tipo User
    const newUser:User={
      id:getNewId,
      email:formRegister.email,
      password: formRegister.password
    }

    // guardar el nuevo arreglo
    handleAddUser (newUser);
    Alert.alert(
      "Felicitaciones",
      "Registro exitoso"
    );
    navigation.goBack();

    //console.log(formRegister);
  }

  //funcion para verificar que el usuario esta en la lista de usuarios-arreglo
  const verifyUser= ():User => {
    const existUser = users.filter(user => user.email === formRegister.email)[0];
    return existUser; //User- null

  }

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/high/gaming-profile-pictures-ocli0t6z9fjhvoyk.webp'}}
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