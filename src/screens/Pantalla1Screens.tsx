import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View, Image, StyleSheet, ImageBackground, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonComponent } from '../components/ButtonComponents';
import { styles } from '../theme/app.theme';

export const Pantalla1Screens = ({ navigation }: any) => {
    return (
        <ImageBackground
            source={{ uri: 'https://cdn.pixabay.com/photo/2023/09/17/22/25/witch-8259351_1280.jpg' }}
            style={styles.fondoIni}>
            <View style={styles.contenedorIni}>
                <Text style={styles.tituloIni}>Bienvenido a D'game</Text>
                <Text style={styles.subtituloIni}>¡Únete a nosotros para una experiencia inolvidable!</Text>
                <ButtonComponent textButton="Iniciar" actionButton={() => navigation.navigate('Login')} />
            </View>
        </ImageBackground>
    )
}