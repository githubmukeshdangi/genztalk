import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  avoidingView: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 26,
    color: '#234F68',
    fontWeight: 'bold',
    marginTop: 35,
  },
  subHeading: {
    fontSize: 14,
    color: '#53587A',
    marginBottom: 30,
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    height: 50,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: 'purple',
  },
  btn: {
    backgroundColor: '#D80E7A',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    marginTop: 40,
  },
  btnText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  orContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginVertical:15
  },
  line:{
    borderTopWidth:1,
    width:'35%',
    borderColor:'#e9e1e1'
  },
  orText:{
    color:'#807a7a',
    fontSize:12
  },
  textContainer:{
     flexDirection:'row',
     textAlign:'center',
     justifyContent:'center'
  },
  linkText:{
    color:'#666262',
    fontSize:13
  },
registerText:{
  color:'#ad2626',
    fontSize:13,
    marginLeft:5
}
});
export default styles