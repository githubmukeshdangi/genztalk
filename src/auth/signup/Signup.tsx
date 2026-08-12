import React, { useState } from 'react';
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
import { Picker } from '@react-native-picker/picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './signup.style';
import { axiosInstace } from '../../services/api';
import constant from '../../services/api/constant';

interface SignupStateProps {
  userName: string;
  password: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  postal: string;
  address: string;
}

const Signup = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const insets = useSafeAreaInsets();

  const [signupState, setSignupState] = useState<SignupStateProps>({
    userName: '',
    password: '',
    email: '',
    mobile: '',
    city: '',
    state: '',
    postal: '',
    address: '',
  });

  const behavior =
    Platform.OS === 'ios'
      ? 'padding'
      : Platform.OS === 'android' && Platform.Version >= 35
      ? 'padding'
      : 'height';

  const onChange = (key: keyof SignupStateProps, value: string) => {
    setSignupState(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSignup = () => {
    const { userName, password, email, mobile, city, state, postal, address } =
      signupState;

    if (!userName.trim()) {
      Alert.alert('Please enter username');
    } else if (!email.trim()) {
      Alert.alert('Please enter email');
    } else if (!password.trim()) {
      Alert.alert('Please enter password');
    } else if (!mobile.trim()) {
      Alert.alert('Please enter mobile number');
    } else if (!city) {
      Alert.alert('Please select city');
    } else if (!state.trim()) {
      Alert.alert('Please enter state');
    } else if (!postal.trim()) {
      Alert.alert('Please enter postal code');
    } else if (!address.trim()) {
      Alert.alert('Please enter address');
    } else {
     signupApi()
    }
  };

  const signupApi = async ()=>{
    const formData={
        userName: signupState.userName,
        email:signupState.email,
        password: signupState.password,
        mobile: signupState.mobile,
        city:signupState.city,
        state:signupState.state,
        postal:signupState.postal,
        address:signupState.address
    }
    console.log(formData)
    try {
      const {data}= await axiosInstace.post('/registerUser',formData)
      console.log(data)
       Alert.alert('Success', 'Registration Successful');
      navigation.goBack();
    } catch (error:any) {
      Alert.alert('Error', error.response?.data?.message );
      console.log(error)
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={{ height: insets.top,backgroundColor:'#fff' }}>
        <StatusBar barStyle="dark-content" backgroundColor='#fff' />
      </View>

      <KeyboardAvoidingView style={styles.avoidingView} behavior={behavior}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.subHeading}>Create your account</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={signupState.userName}
              onChangeText={text => onChange('userName', text)}
              placeholderTextColor="#A1A5C1"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={signupState.email}
              onChangeText={text => onChange('email', text)}
              placeholderTextColor="#A1A5C1"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={signupState.password}
              onChangeText={text => onChange('password', text)}
              placeholderTextColor="#A1A5C1"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mobile"
              keyboardType="number-pad"
              maxLength={10}
              value={signupState.mobile}
              onChangeText={text => onChange('mobile', text)}
              placeholderTextColor="#A1A5C1"
            />
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={signupState.city}
              dropdownIconColor="#A1A5C1"
              style={[
                styles.picker,
                {
                  color: signupState.city ? 'purple' : '#A1A5C1',
                },
              ]}
              onValueChange={value => onChange('city', value)}
            >
              <Picker.Item label="Select City" value="" />
              <Picker.Item label="Bangalore" value="Bangalore" />
              <Picker.Item label="Indore" value="Indore" />
              <Picker.Item label="Mumbai" value="Mumbai" />
              <Picker.Item label="Delhi" value="Delhi" />
            </Picker>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="State"
              value={signupState.state}
              onChangeText={text => onChange('state', text)}
              placeholderTextColor="#A1A5C1"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Postal Code"
              keyboardType="number-pad"
              maxLength={6}
              value={signupState.postal}
              onChangeText={text => onChange('postal', text)}
              placeholderTextColor="#A1A5C1"
            />
          </View>

          <View style={[styles.inputContainer, { height: 100 }]}>
            <TextInput
              style={[styles.input, { textAlignVertical: 'top' }]}
              multiline
              placeholder="Address"
              value={signupState.address}
              onChangeText={text => onChange('address', text)}
              placeholderTextColor="#A1A5C1"
            />
          </View>

          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={onSignup}
          >
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;

