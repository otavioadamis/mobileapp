import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { FC, useState } from 'react'
import Icons from '../constants/icons';

interface FormProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}

const FormField: FC<FormProps> = ({ title, value, placeholder, handleChangeText, otherStyles }) => {

  const [showPassowrd, setShowPassowrd] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-500 font-medium'>{title}</Text>

      <View className='border-2 border-gray-500 w-full h-16 px-4 rounded-2xl focus:border-black items-center flex-row'>
        <TextInput
          className='flex-1 text-black font-semibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Senha' && !showPassowrd}
        />

        {title === 'Senha' && (
          <TouchableOpacity onPress={() => setShowPassowrd(!showPassowrd)}>
            <View className='w-6 h-6'>
              {showPassowrd ? (
                <Icons.EyeHide color='gray' />
              ) : (<Icons.EyeShow color='gray' />

              )
              }
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField