import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CalendarIcon, HomeIcon, MessageIcon, ProfileIcon } from '@/constants/Icon';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].icon,
        headerShown: false,
        tabBarShowLabel: false, // Hide the tab labels
        tabBarStyle: {
          height: 70, // Adjust the height as needed
          borderTopLeftRadius: 20, // Add top border radius
          borderTopRightRadius: 20, // Add top border radius
          position: 'absolute',
          overflow: 'hidden',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && { borderTopColor: Colors[colorScheme ?? 'light'].tint, borderTopWidth: 3, }]}>
              <HomeIcon color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && { borderTopColor: Colors[colorScheme ?? 'light'].tint, borderTopWidth: 3 }]}>
              <MessageIcon color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && { borderTopColor: Colors[colorScheme ?? 'light'].tint, borderTopWidth: 3 }]}>
              <CalendarIcon color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && { borderTopColor: Colors[colorScheme ?? 'light'].tint, borderTopWidth: 3 }]}>
              <ProfileIcon color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',

    height: '100%',
  },
});
