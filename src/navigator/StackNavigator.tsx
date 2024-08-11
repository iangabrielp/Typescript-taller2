import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screens } from '../screens/Pantalla1Screens';
import { Pantalla2Screens } from '../screens/Pantalla2Screens';
import { Pantalla3Screens } from '../screens/Pantalla3Screens';


const Stack = createStackNavigator();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: '#010534'
      }
    }}>
      <Stack.Screen name="Pantalla1" options={{ headerShown: false }} component={Pantalla1Screens} />
      <Stack.Screen name="Login" options={{ title: '',headerTransparent: true}} component={Pantalla2Screens} />
      <Stack.Screen name="Register" options={{ title: '',headerTransparent: true }} component={Pantalla3Screens} /> 
    </Stack.Navigator>
  );
}