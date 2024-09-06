import { View, Text } from 'react-native'
import React from 'react'
import Icons from '../constants/icons'

const SolicitationsCard = () => {
  return (
    <View className='items-center'>
    <View className='flex-row'>
      <View className='items-center justify-center'>
        <Icons.NewMessage size={56} />
      </View>
      <View className='flex-col ml-2'>
        <View className='flex-row space-x-10'>
          <View>
            <Text className='font-semibold text-base'>Solicitações</Text>
          </View>
        </View>
        <View>
          <View className='w-[30vh]'>
            <Text numberOfLines={2} className='font-medium text-gray-500'>3 Novas solicitações</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
  )
}

export default SolicitationsCard