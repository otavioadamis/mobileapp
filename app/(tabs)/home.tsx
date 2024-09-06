import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserContext } from '../../context/UserContext';
import Post from '../../components/Post';
import { ScrollView, View } from 'react-native';
const Home = () => {
  const userContext = useUserContext();
  const username = userContext.user?.name;

  return (
    <SafeAreaView>
      <ScrollView className='flex-col divide-y divide-gray-400'>
        <View>
          <Post />
        </View>
        <View>
          <Post />
        </View>
        <View>
          <Post />
        </View>
        <View>
          <Post />
        </View>
        <View>
          <Post />
        </View>
        <View>
          <Post />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home