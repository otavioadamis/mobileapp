import { View, Text } from 'react-native'
import React from 'react'
import { UserContext, UserContextProvider } from '../../context/UserContext'
import { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const userContext = useContext(UserContext);
  const username = userContext.user?.name;
  console.log("user in home: " + userContext.user?.name)

  return (
    <SafeAreaView>
      <View>
        <Text>Bem vindo, {username}</Text>
      </View>
    </SafeAreaView>

  )
}

export default Home