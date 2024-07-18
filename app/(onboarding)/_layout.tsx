import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function Layout() {

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="final" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="success" options={{ headerShown: false }} />
            <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
            <Stack.Screen name="code" options={{ headerShown: false }} />
            <Stack.Screen name="newpass" options={{ headerShown: false }} />
            <Stack.Screen name="successPass" options={{ headerShown: false }} />

        </Stack>
    );
}
