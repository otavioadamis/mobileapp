import { Link } from 'expo-router';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Homepage = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>HELLOWORLD</Text>
        <Link href="/home">Go to homepage</Link>
        <Link href="/login">Go to loginpage</Link>
      </View>
    </SafeAreaView>

  )
}

export default Homepage;