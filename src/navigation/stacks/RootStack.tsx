import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../auth/login/Login';
import Signup from '../../auth/signup/Signup';
import HomeScreen from '../../home/homeScreen/HomeScreen';
const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='login'
    screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="homeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
