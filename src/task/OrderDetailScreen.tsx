// import React, {useEffect, useState} from 'react';
// import {
//   Alert,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import {Picker} from '@react-native-picker/picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useRoute, useNavigation} from '@react-navigation/native';

// import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
// import {updateOrderStatus, setOrders} from '../redux/appSlice';
// import {OrderStatus} from '../types/order';

// const STORAGE_KEY = 'restaurant_orders';

// const OrderDetailScreen = () => {
//   const route = useRoute<any>();
//   const navigation = useNavigation<any>();

//   const dispatch = useAppDispatch();

//   const {orderId} = route.params;

//   const orders = useAppSelector(state => state.app.orders);

//   const order = orders.find(item => item.id === orderId);

//   const [status, setStatus] = useState<OrderStatus>('Pending');

//   useEffect(() => {
//     if (order) {
//       setStatus(order.status);
//     }
//   }, [order]);

//   const handleUpdate = async () => {
//     if (!order) return;

//     dispatch(
//       updateOrderStatus({
//         id: order.id,
//         status,
//       }),
//     );

//     const updatedOrders = orders.map(item =>
//       item.id === order.id
//         ? {
//             ...item,
//             status,
//           }
//         : item,
//     );

//     dispatch(setOrders(updatedOrders));

//     await AsyncStorage.setItem(
//       STORAGE_KEY,
//       JSON.stringify(updatedOrders),
//     );

//     Alert.alert('Success', 'Order Updated Successfully');

//     navigation.goBack();
//   };

//   if (!order) {
//     return (
//       <SafeAreaView style={styles.center}>
//         <Text>Order Not Found</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>

//         <Text style={styles.heading}>
//           Order Details
//         </Text>

//         <View style={styles.card}>

//           <Text style={styles.label}>
//             Order ID
//           </Text>

//           <Text style={styles.value}>
//             {order.id}
//           </Text>

//           <Text style={styles.label}>
//             Customer
//           </Text>

//           <Text style={styles.value}>
//             {order.customerName}
//           </Text>

//           <Text style={styles.label}>
//             Amount
//           </Text>

//           <Text style={styles.value}>
//             ₹ {order.totalAmount}
//           </Text>

//         </View>

//         <Text style={styles.sectionTitle}>
//           Items
//         </Text>

//         {order.items.map(item => (
//           <View
//             key={item.id}
//             style={styles.itemCard}>
//             <Text style={styles.itemName}>
//               {item.name}
//             </Text>

//             <Text>
//               Qty : {item.quantity}
//             </Text>

//             <Text>
//               ₹ {item.price}
//             </Text>
//           </View>
//         ))}

//         <Text style={styles.sectionTitle}>
//           Change Status
//         </Text>

//         <View style={styles.pickerContainer}>
//           <Picker
//             selectedValue={status}
//             onValueChange={value =>
//               setStatus(value)
//             }>
//             <Picker.Item
//               label="Pending"
//               value="Pending"
//             />

//             <Picker.Item
//               label="In Progress"
//               value="In Progress"
//             />

//             <Picker.Item
//               label="Completed"
//               value="Completed"
//             />
//           </Picker>
//         </View>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleUpdate}>
//           <Text style={styles.buttonText}>
//             Update Order
//           </Text>
//         </TouchableOpacity>

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default OrderDetailScreen;

// const styles = StyleSheet.create({

//   container:{
//     flex:1,
//     backgroundColor:'#f5f5f5',
//     padding:16,
//   },

//   center:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//   },

//   heading:{
//     fontSize:28,
//     fontWeight:'700',
//     marginBottom:20,
//     color:'#222',
//   },

//   card:{
//     backgroundColor:'#fff',
//     borderRadius:12,
//     padding:18,
//     marginBottom:20,
//   },

//   label:{
//     color:'#666',
//     marginTop:10,
//   },

//   value:{
//     fontWeight:'700',
//     fontSize:16,
//     color:'#111',
//   },

//   sectionTitle:{
//     fontSize:20,
//     fontWeight:'700',
//     marginBottom:12,
//   },

//   itemCard:{
//     backgroundColor:'#fff',
//     padding:15,
//     borderRadius:10,
//     marginBottom:10,
//   },

//   itemName:{
//     fontWeight:'700',
//     fontSize:16,
//   },

//   pickerContainer:{
//     backgroundColor:'#fff',
//     borderRadius:10,
//     marginBottom:25,
//   },

//   button:{
//     backgroundColor:'#007AFF',
//     height:52,
//     justifyContent:'center',
//     alignItems:'center',
//     borderRadius:10,
//   },

//   buttonText:{
//     color:'#fff',
//     fontWeight:'700',
//     fontSize:16,
//   }

// });