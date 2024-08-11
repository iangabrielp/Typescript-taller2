import { StyleSheet } from "react-native";
import { GAME_COLOR, INI_COLOR, SECUNDARY_COLOR } from "../commons/Constants.color";



export const styles = StyleSheet.create({
  globalTitle: {
    color: SECUNDARY_COLOR,
    fontSize: 27,
    paddingHorizontal: 30,
    paddingVertical: 30,
    fontWeight: 'bold',
  },
  contentBody: {
    
    borderTopLeftRadius: 10,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingTop: 40
  },
  titleBody: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionBody: {
    fontSize: 16,
  },
  inputText: {
    backgroundColor: GAME_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  contentInput: {
    marginTop: 30,
    gap: 10
  },
  button: {
    backgroundColor: INI_COLOR,
    paddingVertical: 20,
    paddingHorizontal:20,
    borderRadius: 10,
    marginTop: 30,

  },
  buttonText: {
    color: SECUNDARY_COLOR,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconPassword: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
    marginTop: 13
  },
  textRedirection: {
    marginTop: 30,
    fontSize: 16,
    color: INI_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  
  // themes inicio
  fondoIni: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contenedorIni: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  tituloIni: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 20,
  },
  subtituloIni: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  // themes Pantalla 2
  
  titulopant2: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  
});