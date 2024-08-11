import React from 'react'
import { useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/app.theme';


export const BodyComponents = (props: any) => {
  //hook useWindowDimensions: tamaño de la pantalla
  const { height } = useWindowDimensions();
  return (
    <View style={{
      ...styles.contentBody,
      height: height * 0.99
    }}>
      {props.children}
    </View>
  )
}
