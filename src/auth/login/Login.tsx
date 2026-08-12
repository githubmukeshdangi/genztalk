import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './login.style';
import { axiosInstace } from '../../services/api';

const Login = () => {
  const [loginState, setLoginState] = useState<LoginStateProps>({
    email: '',
    password: '',
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  interface LoginStateProps {
    email: string;
    password: string;
  }

  const insets = useSafeAreaInsets();

  const behavior =
    Platform.OS === 'ios'
      ? 'padding'
      : Platform.OS === 'android' && Platform.Version >= 35
      ? 'padding'
      : 'height';

  const onEmail = (text: string) => {
    setLoginState({
      ...loginState,
      email: text,
    });
  };
  const onPassword =  (text: string) => {
    setLoginState({
      ...loginState,
      password: text,
    });
  };
  const onRegister = () => {
    navigation.navigate('signup');
  }

  const onLogin = () => {
    const email = loginState.email.trim();
    const password = loginState.password.trim();

    if (!email && !password) {
      Alert.alert('Please enter email and password');
    } else if (!email) {
      Alert.alert('Please enter email');
    } else if (!password) {
      Alert.alert('Please enter password');
    } else {
     loginApi()
    }
  };
  const loginApi =  async() =>{
    const formData = {
      email:loginState.email,
      password:loginState.password
    }
    console.log("formData",formData)
    try {
       const {data} = await axiosInstace.post('/login',formData)
       console.log("data",data)
       navigation.navigate('homeScreen')
    } catch (error:any) {
      Alert.alert('error',error.response?.data?.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ height: insets.top }}>
        <StatusBar barStyle="dark-content" backgroundColor='#fff' />
      </View>
      <KeyboardAvoidingView style={styles.avoidingView} behavior={behavior}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
        >
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.subHeading}>Welcome GenZ</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#A1A5C1"
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={text => onEmail(text.trim())}
              value={loginState.email}
              maxLength={100}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#A1A5C1"
              placeholder="Password"
              onChangeText={text => onPassword(text.trim())}
              value={loginState.password}
              maxLength={11}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={onLogin}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.linkText}>don't have Account</Text>
            <TouchableOpacity hitSlop={10} onPress={onRegister}><Text style={styles.registerText}>Register</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
