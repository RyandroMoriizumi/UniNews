import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fffdf6',
    alignItems: 'center',
  },
  subtex:{
    color:'#F5B304',
    marginBottom:'10%',
    fontSize:13,
  },
  box:{
    borderWidth:2,
    backgroundColor:'#ffffff',
    width:'80%',
    height:'60%',
    borderRadius:10,
    borderColor:'#4A94CC',
    position:'relative',
    alignItems: 'center',
    paddingTop:'7%',
  
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,    
  },
  campo:{
    width:'90%', 
    marginBottom:10,
  },
  campotext:{
    marginLeft:29,
  },
  button:{
    borderWidth: 2,
    borderColor: '#4A94CC',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A94CC',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:'8%',
    marginHorizontal:'1%'
    
  },
  textbutton:{
    color:'#fff',
    fontSize:16
  },
  button2:{
    borderWidth: 2,
    height: 40,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:'8%',
    marginHorizontal:'1%',
  },
  textbutton2:{
    color:'#000000',
    fontSize:16
  },
  boxbutton:{
  flexDirection:'row',
  justifyContent:'center'
  

  },
  text:{
    padding:'3%',

  },
  logo:{
    flexDirection:'row',
    position:'relative',
    paddingTop:'20%'
  
  },
  Uni:{
    fontSize:50,
    color:'#4A94CC',
  },
  News:{
    fontSize:50
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
