
import { SafeAreaView } from 'react-native-safe-area-context'
import Route from './src/navigation'


const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Route />
    </SafeAreaView>
      
  )
}

export default App