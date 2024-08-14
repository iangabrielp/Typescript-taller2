import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screens } from '../screens/Pantalla1Screens';
import { Pantalla2Screens } from '../screens/Pantalla2Screens';
import { Pantalla3Screens } from '../screens/Pantalla3Screens';
import { useState } from 'react';
import { HomeScreens } from '../screens/HomeScreen/HomeScreens';

// interface- arreglo lista usuarios -objetos
export interface User {
  id: number;
  email: string;
  password: string;
}


const Stack = createStackNavigator();

export const StackNavigator = ()=> {
  // arreglo de usuarios: permitir inicio de sesion
  const users: User[] = [
    { id: 1, email: 'gabrie.l@hotmail.es', password: '123456' },
    { id: 2, email: 'dennis.l@hotmail.es', password: '12345678' }
  ];

  // hook useState:manipular el arreglo con la lista de usuarios
  const [listUsers, setListUsers] = useState(users);
  
  // funcion para agregar nuevos metodos al arreglo
  const handleAddUsers= (user:User) =>{
    //operador de propagacion ... : crear una copia del arreglo
    setListUsers([...listUsers, user ]);
  }

  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: '#010534'
      }
    }}>
      <Stack.Screen name="Pantalla1" options={{ headerShown: false }} component={Pantalla1Screens} />
      <Stack.Screen name="Login" options={{ title: '',headerTransparent: true}} 
      children={() => <Pantalla2Screens users={listUsers}/>} />
      <Stack.Screen name="Register" options={{ title: '',headerTransparent: true }} 
      children={()=> <Pantalla3Screens users={listUsers} handleAddUser={handleAddUsers}/>} /> 
      <Stack.Screen name="Home" options={{ title: '',headerTransparent: true }} 
      component={HomeScreens} /> 
    </Stack.Navigator>
  );
}