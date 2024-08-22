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
            </Stack>
        </UserContextProvider>
    )
}

export default RootLayout