import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'

interface ButtonProps {
  title: string;
  handlePress: () => void;
  isLoading: boolean;
  otherStyles?: string;
}

const CustomButton: FC<ButtonProps> = ({ title, handlePress, isLoading, otherStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={
        `bg-yellow-400 rounded-xl min-h-[62px] justify-center items-center ${otherStyles}
        ${isLoading ? 'opacity-50' : ''}`
      }
      disabled={isLoading}
    >
      <Text className='text-black font-semibold text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton