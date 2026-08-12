// import React, {useState} from 'react';
// import {
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {useAppDispatch} from '../hooks/reduxHooks';
// import {login} from '../redux/appSlice';

// type RootStackParamList = {
//   Login: undefined;
//   Orders: undefined;
// };

// type NavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Login'
// >;

// const LoginScreen = () => {
//   const navigation = useNavigation<NavigationProp>();
//   const dispatch = useAppDispatch();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secureText, setSecureText] = useState(true);

//   const handleLogin = () => {
//     if (!email.trim() || !password.trim()) {
//       Alert.alert('Validation', 'Please enter email and password');
//       return;
//     }

//     if (
//       email === 'owner@dummy.com' &&
//       password === 'password123'
//     ) {
//       dispatch(login());

//       navigation.replace('Orders');
//     } else {
//       Alert.alert('Login Failed', 'Invalid email or password');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         style={styles.keyboard}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//         <View style={styles.card}>
//           <Text style={styles.title}>Restaurant Partner</Text>

//           <Text style={styles.subtitle}>
//             Login to continue
//           </Text>

//           <TextInput
//             placeholder="Email"
//             placeholderTextColor="#777"
//             style={styles.input}
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={email}
//             onChangeText={setEmail}
//           />

//           <View style={styles.passwordContainer}>
//             <TextInput
//               placeholder="Password"
//               placeholderTextColor="#777"
//               secureTextEntry={secureText}
//               style={styles.passwordInput}
//               value={password}
//               onChangeText={setPassword}
//             />

//             <TouchableOpacity
//               onPress={() => setSecureText(!secureText)}>
//               <Text style={styles.showText}>
//                 {secureText ? 'Show' : 'Hide'}
//               </Text>
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleLogin}>
//             <Text style={styles.buttonText}>
//               Login
//             </Text>
//           </TouchableOpacity>

//           <Text style={styles.demo}>
//             Demo Credentials
//           </Text>

//           <Text style={styles.demoText}>
//             owner@dummy.com
//           </Text>

//           <Text style={styles.demoText}>
//             password123
//           </Text>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F6F6',
//   },

//   keyboard: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },

//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//     elevation: 4,
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#222',
//     marginBottom: 8,
//   },

//   subtitle: {
//     color: '#666',
//     marginBottom: 25,
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     height: 50,
//     marginBottom: 15,
//     color: '#000',
//   },

//   passwordContainer: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     marginBottom: 20,
//   },

//   passwordInput: {
//     flex: 1,
//     height: 50,
//     color: '#000',
//   },

//   showText: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },

//   button: {
//     backgroundColor: '#007AFF',
//     borderRadius: 8,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   buttonText: {
//     color: '#fff',
//     fontWeight: '700',
//     fontSize: 16,
//   },

//   demo: {
//     marginTop: 25,
//     textAlign: 'center',
//     fontWeight: '700',
//   },

//   demoText: {
//     textAlign: 'center',
//     color: '#666',
//     marginTop: 3,
//   },
// });