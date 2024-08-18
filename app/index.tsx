import { Link } from 'expo-router';
import { View, Text } from 'react-native'

const Homepage = () => {
  return (
    <View>
        <Text>HELLOWORLD</Text>
        <Link href="/home">Go to homepage</Link>
    </View>
  )
}

export default Homepage;