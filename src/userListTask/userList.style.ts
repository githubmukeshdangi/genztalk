import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      paddingHorizontal:20
    },
    search:{
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        color:'#000'},
        
    statusContainer:{
        marginTop:50
    },userCard:{
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        color:'#000',
        
    },
    field:{
   fontWeight:'bold',
    },
    loader:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    }
})
export default styles