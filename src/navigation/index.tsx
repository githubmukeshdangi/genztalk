import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './stacks/RootStack'
import { SafeAreaView } from 'react-native-safe-area-context'


const Route: React.FC = () => {
  return (
   <NavigationContainer>
   <SafeAreaView style={{flex:1}} edges={['bottom', 'left', 'right']}>
     <RootStack />
   </SafeAreaView>
   </NavigationContainer>
  )
}

export default Route