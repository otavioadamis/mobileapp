import { SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import MessageCard from '../../components/MessageCard'
import SolicitationsCard from '../../components/SolicitationsCard'


const Messages = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className='ml-6 mt-3 items-start'>
          <SolicitationsCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Messages