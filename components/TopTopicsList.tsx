import { View, Text, FlatList, Touchable, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const TopTopicsList = () => {

    const RenderTopicCard = () => {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View className='flex-col ml-4 space-y-2'>
                    <View className='flex-row space-x-2'>
                        <Text>1</Text>
                        <Text>•</Text>
                        <Text>Esportes</Text>
                    </View>
                    <View>
                        <Text className='font-bold'>Seleção brasileira</Text>
                    </View>
                    <View>
                        <Text className='font-normal text-[12px]'>16 mil posts</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const width = Dimensions.get('window').width;

    return (
        <View className='h-[100%]' style={{ width: width }}>
            <FlatList
                contentContainerStyle={{ gap: 15 }}
                scrollEnabled={false}
                renderItem={RenderTopicCard}
                data={[1, 2, 3, 4, 5, 6, 7 , 8]}
            />
        </View>
    )
}

export default TopTopicsList