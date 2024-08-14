import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/app.theme';

//interface -props
interface Props{
    title: string;
}

export const TitleComponent = ({title}:Props) => {
    const {height}=useWindowDimensions ();
  return (
    <Text style= {{
        ...styles.globalTitle,
        height: height *0.11
        }}>
        {title}
    </Text>
  )
}
