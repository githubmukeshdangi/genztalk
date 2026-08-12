// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useState,
// } from 'react';
// import {
//   FlatList,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';

// import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
// import {setOrders} from '../redux/appSlice';
// import ordersData from '../data/orders.json';
// import {Order, OrderStatus} from '../types/order';

// const STORAGE_KEY = 'restaurant_orders';

// const FILTERS: ('All' | OrderStatus)[] = [
//   'All',
//   'Pending',
//   'In Progress',
//   'Completed',
// ];

// const OrdersScreen = () => {
//   const navigation = useNavigation<any>();
//   const dispatch = useAppDispatch();

//   const orders = useAppSelector(state => state.app.orders);

//   const [search, setSearch] = useState('');
//   const [selectedStatus, setSelectedStatus] = useState<
//     'All' | OrderStatus
//   >('All');

//   useEffect(() => {
//     loadOrders();
//   }, []);

//   const loadOrders = async () => {
//     try {
//       const localData = await AsyncStorage.getItem(STORAGE_KEY);

//       if (localData) {
//         dispatch(setOrders(JSON.parse(localData)));
//       } else {
//         dispatch(setOrders(ordersData as Order[]));

//         await AsyncStorage.setItem(
//           STORAGE_KEY,
//           JSON.stringify(ordersData),
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const filteredOrders = useMemo(() => {
//     return orders.filter(order => {
//       const searchMatch =
//         order.customerName
//           .toLowerCase()
//           .includes(search.toLowerCase()) ||
//         order.id.toLowerCase().includes(search.toLowerCase());

//       const statusMatch =
//         selectedStatus === 'All'
//           ? true
//           : order.status === selectedStatus;

//       return searchMatch && statusMatch;
//     });
//   }, [orders, search, selectedStatus]);

//   const renderItem = useCallback(
//     ({item}: {item: Order}) => (
//       <TouchableOpacity
//         style={styles.card}
//         activeOpacity={0.8}
//         onPress={() =>
//           navigation.navigate('OrderDetail', {
//             orderId: item.id,
//           })
//         }>
//         <View>
//           <Text style={styles.orderId}>
//             {item.id}
//           </Text>

//           <Text style={styles.customer}>
//             {item.customerName}
//           </Text>

//           <Text style={styles.amount}>
//             ₹ {item.totalAmount}
//           </Text>
//         </View>

//         <View
//           style={[
//             styles.statusContainer,
//             item.status === 'Pending'
//               ? styles.pending
//               : item.status === 'In Progress'
//               ? styles.progress
//               : styles.completed,
//           ]}>
//           <Text style={styles.statusText}>
//             {item.status}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     ),
//     [navigation],
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.heading}>
//         Recent Orders
//       </Text>

//       <TextInput
//         placeholder="Search Order ID / Customer"
//         placeholderTextColor="#999"
//         style={styles.search}
//         value={search}
//         onChangeText={setSearch}
//       />

//       <View style={styles.filterRow}>
//         {FILTERS.map(item => (
//           <TouchableOpacity
//             key={item}
//             style={[
//               styles.filterBtn,
//               selectedStatus === item &&
//                 styles.activeFilter,
//             ]}
//             onPress={() =>
//               setSelectedStatus(item)
//             }>
//             <Text
//               style={[
//                 styles.filterText,
//                 selectedStatus === item &&
//                   styles.activeFilterText,
//               ]}>
//               {item}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <FlatList
//         data={filteredOrders}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         showsVerticalScrollIndicator={false}
//         initialNumToRender={8}
//         maxToRenderPerBatch={8}
//         windowSize={7}
//         removeClippedSubviews
//         contentContainerStyle={{
//           paddingBottom: 30,
//         }}
//         ListEmptyComponent={() => (
//           <Text style={styles.empty}>
//             No Orders Found
//           </Text>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// export default OrdersScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },

//   heading: {
//     fontSize: 28,
//     fontWeight: '700',
//     marginBottom: 15,
//     color: '#222',
//   },

//   search: {
//     height: 48,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     color: '#000',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },

//   filterRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 15,
//   },

//   filterBtn: {
//     backgroundColor: '#e8e8e8',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 8,
//     marginBottom: 8,
//   },

//   activeFilter: {
//     backgroundColor: '#007AFF',
//   },

//   filterText: {
//     color: '#333',
//     fontWeight: '600',
//   },

//   activeFilterText: {
//     color: '#fff',
//   },

//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     elevation: 2,
//   },

//   orderId: {
//     fontWeight: '700',
//     fontSize: 16,
//     color: '#222',
//   },

//   customer: {
//     marginTop: 5,
//     color: '#444',
//   },

//   amount: {
//     marginTop: 5,
//     fontWeight: '600',
//     color: '#000',
//   },

//   statusContainer: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },

//   pending: {
//     backgroundColor: '#FFE082',
//   },

//   progress: {
//     backgroundColor: '#81D4FA',
//   },

//   completed: {
//     backgroundColor: '#A5D6A7',
//   },

//   statusText: {
//     fontWeight: '700',
//     color: '#222',
//   },

//   empty: {
//     textAlign: 'center',
//     marginTop: 40,
//     fontSize: 16,
//     color: '#666',
//   },
// });