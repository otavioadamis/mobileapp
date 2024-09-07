import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../constants/images'

const MessageCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
    <View className='items-center mt-3'>
    <View className='flex-row'>
      <View className='items-center justify-center'>
        <TouchableOpacity activeOpacity={0.3}>
        <Image
          source={images.profile}
          resizeMethod='resize'
          className='w-14 h-12 rounded-full'
        />
        </TouchableOpacity>
      </View>
      <View className='flex-col ml-2'>
        <View className='flex-row space-x-10'>
          <View>
            <Text className='font-semibold text-base'>Otavio</Text>
          </View>
          <View>
            <Text className='font-medium text-gray-500 text-base'>@otavio</Text>
          </View>
          <View>
            <Text className='font-medium text-gray-500 text-base'>3d</Text>
          </View>
        </View>
        <View>
          <View className='w-[30vh]'>
            <Text numberOfLines={2} className='font-medium text-gray-500'>Ola amigo quanto tempo, vamos marcar de sair, tenho umas coisas muito foda pra te mostrar</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
    </TouchableOpacity>
  )
}

export default MessageCard