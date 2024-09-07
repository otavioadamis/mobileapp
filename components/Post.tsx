import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../constants/images';
import Icons from '../constants/icons';

const Post = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
    <View className='flex-row ml-2 mt-2'>
      <View className='mt-1'>
      <TouchableOpacity activeOpacity={0.3}>
      <Image
        source={images.profile}
        resizeMethod='resize'
        className='w-12 h-10 rounded-full'
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
          <Text className='text-base'>aoijhgioajgoiajoiajgoijaoi joiaj oiagjaoigj oij giahogo ijgoiajgoi a ogjaoigj aoigoiaj g</Text>
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