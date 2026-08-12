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
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
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
    marginTop: 10,
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    height: 50,
    marginVertical: 8,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    color: 'purple',
  },
  pickerContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    marginVertical: 8,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#D80E7A',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  picker: {
    color: '#A1A5C1',
  },
});
export default styles