import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserContext } from '../../context/UserContext';
import { Text, View, Image } from 'react-native';
import images from '../../constants/images';
import Icons from '../../constants/icons';
const Home = () => {
  const userContext = useUserContext();
  const username = userContext.user?.name;

  return (
    <SafeAreaView>
      <View className='flex-row ml-2'>
        <View className='mt-1'>
          <Image
            source={images.profile}
            resizeMethod='resize'
            className='w-9 h-8 rounded-full'
          />
        </View>
        <View className='flex-col ml-3'>
          <View className='flex-row space-x-2'>
            <View>
              <Text>Otavinho</Text>
            </View>
            <View>
              <Text>@eden</Text>
            </View>
            <View>
              <Text>1d</Text>
            </View>
          </View>
          <View className='flex-col mr-[7vh]'>
            <View>
              <Text>oi</Text>
            </View>
            <View className='flex-row space-x-12'>
              <View>
              <Icons.Comment color='black' size={12}/>
              </View>
              <View>
              <Icons.Heart color='black' size={12}/>
              </View>
              <View>
              <Icons.Share color='black' size={12}/>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home