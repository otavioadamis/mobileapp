import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../constants/images';
import Icons from '../constants/icons';

const Post = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
    <View className='flex-row ml-2 mt-2'>
      <View className='mt-1 items-center justify-start'>
      <TouchableOpacity activeOpacity={0.3} className='bg-transparent shadow-lg shadow-black rounded-full'>
      <Image
        source={images.profile}
        resizeMethod='resize'
        className='w-12 h-12 rounded-full'
      />
      </TouchableOpacity>
    </View>
    <View className='flex-col ml-3'>
      <View className='flex-row space-x-2'>
        <View>
          <Text className='font-semibold text-base'>Otavinho</Text>
        </View>
        <View>
          <Text className='font-medium text-gray-500 text-base'>@eden</Text>
        </View>
        <View>
          <Text className='font-medium text-gray-500 text-base'>1d</Text>
        </View>
      </View>
      <View className='flex-col mr-[7vh] gap-2'>
        <View>
          <Text className='text-base'>Qual o medo de todas as verdades abundantes qual o medo de todas as verdades abundantes</Text>
        </View>
        <View className='flex-row space-x-12'>
          <View className='flex-row space-x-2 items-center'>
          <Icons.Comment color='black' size={16}/>
          <Text>23</Text>
          </View>
          <View className='flex-row space-x-2 items-center'>
          <Icons.Heart color='black' size={16}/>
          <Text>23</Text>
          </View>
          <View className='flex-row space-x-2 items-center'>
          <Icons.Share color='black' size={16}/>
          <Text>23</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
    </TouchableOpacity>  

  )
}

export default Post 