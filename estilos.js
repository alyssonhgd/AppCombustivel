import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  fundo:{
    backgroundColor:'yellow',
    position:'absolute',
    left:20,
    right:20,
    top:20,
    bottom:20,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    paddingTop:10,
    borderRadius:20,

  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingTop:10,
    borderRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    paddingBottom:20,
    
  },
  input: {
    borderColor: 'red',
    backgroundColor: 'white',
    width: "70%",
    borderRadius: 10,
    borderWidth: 1,
    height: 45, textAlign: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 70,
    height: 500,
    borderRadius:50,
    alignItems:'center',
    
  },
  botao:{
    borderRadius:5,
    width:"100%",
    paddingTop:10,
    borderTopWidth:'1px',
    borderStyle:'solid',
  },
  scroll:{
    fontSize:20,
    fontWeight:'bold',
    textShadowColor:'white',
    Top:20
  }
});
