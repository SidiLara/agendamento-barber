import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Header } from '@/components/Header';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Header iconName='menufold'></Header>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>

        <Tabs.Screen
          name='index'
          options={{
            title: 'Inicio',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={Colors.primary} />
            ),
          }}
        />
        <Tabs.Screen
          name='agendamentos'
          options={{
            title: 'Agendamentos',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={Colors.primary} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}