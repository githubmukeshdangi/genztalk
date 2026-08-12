import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../auth/login/Login';
import Signup from '../../auth/signup/Signup';
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
    </Stack.Navigator>
  );
};

export default RootStack;
