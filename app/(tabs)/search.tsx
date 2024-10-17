import React, { useRef, useState } from 'react'
import { View, Text, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Dimensions, Pressable, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopTopicsList from '../../components/TopTopicsList'

const Search = () => {
  const w = Dimensions.get('screen').width;
  const scrollViewRef = useRef<ScrollView>(null);
  const [selected, setSelected] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (w - 20))
    setSelected(index);
  }

  const handlePress = (index: number) => {
    setSelected(index);
    scrollViewRef.current?.scrollTo({ x: w * index, animated: true });
  }

  return (
    <SafeAreaView className=''>
      <View className='flex-row rounded-xl bg-gray-200 h-8 w-[50%] items-center pl-2 m-2 shadow-sm shadow-black'>
        <TextInput placeholder='Pesquisar' className=''></TextInput>
      </View>
      <View className='flex-row space-x-4 m-4 justify-between'>
        <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress(0)}>
          <Text className={`font-medium text-[16px] ${selected === 0 ? 'text-blue-500' : 'text-black'}`}>Assuntos do momento</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress(1)}>
          <Text className={`font-medium text-[16px] ${selected === 1 ? 'text-blue-500' : 'text-black'}`}>Notícias</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress(2)}>
          <Text className={`font-medium text-[16px] ${selected === 2 ? 'text-blue-500' : 'text-black'}`}>Vídeos</Text>
        </TouchableOpacity>
      </View>
        <ScrollView
          className=''
          horizontal
          onScroll={onScroll}
          pagingEnabled
          snapToAlignment='start'
          decelerationRate="fast"
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
        >
          <TopTopicsList />
          <TopTopicsList />
          <TopTopicsList />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Search