import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import Icons from '../constants/icons'
import { router } from 'expo-router'

const CreatePost = () => {
  
  const createNewPost = () => {
    console.log("postou post")
    router.navigate('/home')
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior='height'
      >
        <View className='flex space-y-12 h-full'>
          <View className='flex-row relative ml-6 mr-6'>
            <TouchableOpacity
            onPress={router.back}>
              <View className='absolute mt-2'>
                <Icons.Close size={25} />
              </View>
            </TouchableOpacity>
            <View className='absolute right-0'>
              <TouchableOpacity
                onPress={createNewPost}
                activeOpacity={0.7}
                className="bg-yellow-400 p-2 rounded-xl"
              >
                <Text className='text-black font-semibold text-sm'>Publicar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className='flex-row space-x-3 border-t-[0.5px] border-gray-400'>
            <View className='flex top-0 ml-6 mt-2'>
              <TouchableOpacity activeOpacity={0.3}>
                <Image
                  source={images.profile}
                  resizeMethod='resize'
                  className='w-8 h-8 rounded-full'
                />
              </TouchableOpacity>
            </View>
            <View className='w-[36vh] mt-2'>
              <TextInput
                placeholder='Diga algo para o mundo!'
                autoFocus
                multiline
                maxLength={400}
              />
            </View>
          </View>
          <View className='flex-row absolute space-x-10 bottom-0 w-full border-[0.5px] border-gray-400 pl-6 pr-6 pt-3 pb-3'>
            <View>
              <Icons.Image size={28} color='#00C1FC' />
            </View>
            <View>
              <Icons.Image size={28} color='#00C1FC' />
            </View>
            <View>
              <Icons.Image size={28} color='#00C1FC' />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default CreatePost;