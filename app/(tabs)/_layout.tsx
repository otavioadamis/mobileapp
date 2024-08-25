import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { Tabs } from 'expo-router'
import icons from '../../constants/icons'
import NavBar from '../../components/NavBar';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TabIconProps {
  icon: React.ComponentType<{ color: string, size: number }>;
  color: string;
  focused: boolean;
  name: string;
}

const TabIcon: FC<TabIconProps> =
  ({
    icon: Icon,
    color: iconColor,
    name: iconName,
    focused: isFocused
  }) => {
    return (
      <View className='flex items-center justify-center'>
        <Icon color={iconColor} size={24} />
        <Text style={{ color: iconColor }} className={`${isFocused ? 'font-semibold' : 'font-regular'} text-xs`}>{iconName}</Text>
      </View>
    )
  };

const TabsLayout = () => {
  return (
    <>
    
    <SafeAreaView>
      <NavBar/>
    </SafeAreaView>

      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA006',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: '#232533',
        }
      }}>

        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Home}
                color={color}
                focused={focused}
                name='Home'
              />
            )
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Search}
                color={color}
                focused={focused}
                name='Search'
              />
            )
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            title: 'Notifications',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Notifications}
                color={color}
                focused={focused}
                name='Notifications'
              />
            )
          }}
        />

        <Tabs.Screen
          name="messages"
          options={{
            title: 'Messages',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Messages}
                color={color}
                focused={focused}
                name='Messages'
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout