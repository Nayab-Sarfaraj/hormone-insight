import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import { Stack } from 'expo-router';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  // const MyPlan
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,

      }} initialRouteName='MyPlan'>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // headerTitleStyle: ({ color, focused }),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? "#FFCF00" : "#8E8E93"} />
          ),

        }}
      />

      <Tabs.Screen
        name="MyPlan"
        options={{
          title: 'My Plan',
          tabBarIcon: ({ color, focused, size }) => (
            <Feather name={focused ? 'edit' : 'edit'} color={color} size={size} color={focused ? "#FFCF00" : "#8E8E93"} />
          ),
        }}
      />
    </Tabs>
  );
}
