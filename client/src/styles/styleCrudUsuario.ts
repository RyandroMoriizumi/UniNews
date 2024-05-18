import { StyleSheet } from "react-native";
import Button from "../components/addButton/Button";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabecalho: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: '2.5%',
    paddingTop: '4.5%',
    height: '10%',
    alignItems: 'center',
  },
  line: {
    borderWidth: 3,
    marginTop: '2.5%',
    width: '100%',
  },
  nameLogo:{
    marginLeft: '3%',
    fontSize: 50,
    fontFamily: 'Teachers Students',
  },
  nameLogoSecondary:{
    fontSize: 50,
    fontFamily: 'Teachers Students',
  },
     containerDados: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center', 
      marginLeft: '2%',
      marginTop:'5%',
    },
    viewDados: { 
      width: '50%',
      marginHorizontal: 8,
      marginTop: 10
    },
    titulo: {
      fontSize: 30,
      margin: '4%',
      fontFamily: 'Teachers Students',
    },
    imageContainer: {
      width: 50,
      padding: '1%'
    },
    containerInput: { 
      borderWidth: 2,
      borderRadius: 10,
      padding: 5,
      paddingTop: 10,
      paddingBottom: '10%',
    },
    input: {
      borderWidth: 1,
      borderRadius: 5,
      height: 30,
      fontFamily: 'Rubik_400Regular',
      paddingLeft: 5,
      marginTop: '3%',
      
    },
    containerButton: {
      margin: 30,
    },
    campos: {
      marginTop: 7,
      fontFamily: 'Rubik_400Regular',
    },
    radio: {
      flexDirection: 'row',
      paddingTop: '5%',
    },
    textRadio: {
      fontSize: 15,
      fontFamily: 'Rubik_400Regular',
      paddingTop: '5%',
    },
    containerTable: { 
      width: '100%',
      height: '35%',
      marginTop: '5%',
      marginLeft: '2%' },
    table: { 
      width: '90%',
      height: '100%',
      borderWidth: 2,
      borderRadius: 10 },
  });