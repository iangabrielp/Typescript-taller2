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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fff', 
  },
  contentInput: {
    marginTop: 30,
    gap: 1,
    color: GAME_COLOR, 
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
    marginTop: 10
  },
  textRedirection: {
    marginTop: 30,
    fontSize: 16,
    color: SECUNDARY_COLOR,
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
  
    padding:30,
    borderRadius:10,
    shadowColor:GAME_COLOR,
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
    borderBottomColor: INI_COLOR,
    margin:5,
    borderBottomWidth:2,
    padding:15,
    alignItems:'center',
  },
  titleModal:{
    fontSize:30,
    fontWeight:'bold',
    color:SECUNDARY_COLOR
  },
  imageModal:{
    margin:5,
    width:300,
    height:200,
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
    color:SECUNDARY_COLOR,
    textAlign:'center',
  },
  buttonAddCard:{
    backgroundColor:INI_COLOR,
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
  color: GAME_COLOR,
  textAlign:'center',
 },
 contentHeaderHome:{
 flexDirection:'row',
 alignItems:'center',
 },
 textIconCar:{
  backgroundColor:SECUNDARY_COLOR,
  borderRadius:100,
  paddingHorizontal:5,
  fontSize:14,
  fontWeight:'bold',
 },
 headerTable:{
  flexDirection:'row',
  justifyContent:'space-between',
 },
 headerTableInf:{
  
  flexDirection:'row',
  
 },
 textHeaderInf:{
  
  fontWeight:'bold',
  color:SECUNDARY_COLOR,
 },
 textTotalPay:{
marginTop:15,
fontSize:15,
fontWeight:'bold',
marginHorizontal:10,
color:SECUNDARY_COLOR,
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
    marginBottom: 10,
    textAlign: 'center',
    marginHorizontal:40
  },
  
});