import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Montserrat_Reg: require('@/assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_Bold: require('@/assets/fonts/Montserrat-Bold.ttf'),
    Montserrat_SemiBold: require('@/assets/fonts/Montserrat-SemiBold.ttf'),
    Montserrat_Light: require('@/assets/fonts/Montserrat-Light.ttf'),
    Montserrat_Thin: require('@/assets/fonts/Montserrat-Thin.ttf'),
    Montserrat_Extralight: require('@/assets/fonts/Montserrat-ExtraLight.ttf'),
    Montserrat_Medium: require('@/assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_Extrabold: require('@/assets/fonts/Montserrat-ExtraBold.ttf'),
    Montserrat_Black: require('@/assets/fonts/Montserrat-Black.ttf'),
  });


  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }




  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        initialRouteName='(tabs)'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(onboarding)" />

        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
