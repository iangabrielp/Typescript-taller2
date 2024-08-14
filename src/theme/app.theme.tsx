import { StyleSheet } from "react-native";
import { GAME_COLOR, INI_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/Constants.color";



export const styles = StyleSheet.create({
  globalTitle: {
    color: '#fff',
    fontSize: 27,
    paddingHorizontal: 40,
    paddingVertical: 30,
    fontWeight: 'bold',
  },
  contentBody: {
    
    borderTopLeftRadius: 10,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 20
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

  contentCard:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderStyle:'solid',
    borderColor:'#ccc',
    borderWidth:2,
    borderRadius:10,
    /*shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.23,
    shadowRadius:2.60,
    elevation:2,*/
    marginBottom:15

  },
  titleCard:{
    padding:10,
    fontWeight:'bold',
    fontSize:17,
    color:'white',
  },
  priceCard:{
    padding:8,
    
    fontSize:13,
    color:'white',
  },
  imageCard:{
    width:70,
    height:70,
  },
  iconCard:{
    flex:1,
    alignItems:'flex-end',

  },
  contentPrincipal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.5)',

  },
  contentModal:{
    backgroundColor: GAME_COLOR,
    padding:25,
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5
  },
  headerModal:{
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:2,
    padding:10,
    alignItems:'center',
  },
  titleModal:{
    fontSize:20,
    fontWeight:'bold',
  },
  imageModal:{
    margin:5,
    width:345,
    height:210,
  },
  contentQuantity:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonQuantity:{
    width:50,
    height:50,
    backgroundColor:INI_COLOR,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    margin:17
  },
  textButtonQuantity:{
    color:SECUNDARY_COLOR,
    fontSize:20,
    fontWeight:'bold',
  },
  textQuantity:{
    fontSize:20,
    color:'#000',
    textAlign:'center',
  },
  buttonAddCard:{
    backgroundColor:PRIMARY_COLOR,
    alignItems:'center',
    marginTop:15,
    paddingVertical:10,
    borderRadius:5
  },
 textButtonAddCard:{
  color:SECUNDARY_COLOR,
  fontWeight:'bold',
 },
 messageStock:{
  fontSize:28,
  fontWeight:'bold',
  color: '#b52828',
  textAlign:'center',
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