import { TextInput, StyleSheet, View } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import { INI_COLOR, PRIMARY_COLOR } from "../commons/Constants.color";
import { styles } from "../theme/app.theme";


//interface -props
interface Props {
    input: string;
    handleSetValues: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean;
    hasIcon?: boolean;
    actionIcon?: () => void; // prop funcion
}

export const InputComponents = ({ input, handleSetValues, name, isPassword = false, hasIcon = false, 
    actionIcon }: Props) => {
    return (
        <View>
            {
        (hasIcon)
        ? <Icon name = 'visibility' size={25} 
        onPress={actionIcon}
        color={INI_COLOR}
        style={styles.iconPassword}/>
        :null
      }
        <TextInput
            placeholder={input}
            keyboardType='default'
            style={styles.inputText}
            onChangeText={(value) => handleSetValues(name, value)}
            secureTextEntry={isPassword}
        />
        </View>
    )
}