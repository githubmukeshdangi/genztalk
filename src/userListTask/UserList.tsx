import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { axiosInstace } from '../services/api';
import styles from './userList.style';

const UserList = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState([]);
  const [favorite, setFavorite] = useState({});
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstace.get('/users');
      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getUsers();
  };

  const filterUsers = user.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  filterUsers.sort((a, b) => {
    return (favorite[b.id] ? 1 : 0) - (favorite[a.id] ? 1 : 0);
  });

  const toggleFavorite = (id: number) => {
    setFavorite(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const UserCard = ({ item, favorite, onFavorite }) => {
    return (
      <View style={styles.userCard}>
        <View>
          <Text style={styles.text}>
            Name:<Text style={styles.field}>{item.name}</Text>
          </Text>
          <Text style={styles.text}>
            Email:<Text style={styles.field}>{item?.email}</Text>
          </Text>
          <Text style={styles.text}>
            Company:<Text style={styles.field}>{item?.company?.name}</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={onFavorite}>
          <Text>{favorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <StatusBar barStyle="dark-content" />
      </View>
      <TextInput
        placeholder="Search users..."
        value={search}
        placeholderTextColor="#585858"
        onChangeText={text => setSearch(text)}
        style={styles.search}
      />
      <FlatList
        data={filterUsers}
        keyExtractor={(_, index) => `${index}`}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
        renderItem={({ item }) => (
          <UserCard
            item={item}
            favorite={favorite[item.id]}
            onFavorite={() => toggleFavorite(item.id)}
          />
        )}
      />
    </View>
  );
};

export default UserList;
