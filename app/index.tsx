import { Link, Redirect } from 'expo-router';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserContext } from '../context/UserContext';

const App = () => {
  const userContext = useUserContext();
  if (userContext.isLoggedIn) { return <Redirect href="/home"/> }

  return (
    <SafeAreaView>
      <View>
        <Link href="/home">Go home</Link>
        <Link href="/login">Go to loginpage</Link>
      </View>
    </SafeAreaView>
  )
}

export default App;