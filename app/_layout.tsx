import React from 'react'
import { UserContextProvider } from '../context/UserContext'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <UserContextProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen
                    name='create-post'
                    options={{
                        headerShown: false,
                        presentation: 'modal',
                        animation: 'slide_from_bottom',
                    }}/>
            </Stack>
        </UserContextProvider>
    )
}
export default RootLayout;