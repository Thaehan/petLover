import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SCREEN_KEYS from '@Constants/screenKeys';
import {
  ChatStack,
  ExploreStack,
  HomeStack,
  MyPetsStack,
  SettingsStack,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

export function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={SCREEN_KEYS.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={SCREEN_KEYS.EXPLORE_STACK} component={ExploreStack} />
      <Tab.Screen name={SCREEN_KEYS.CHAT_STACK} component={ChatStack} />
      <Tab.Screen name={SCREEN_KEYS.MY_PET_STACK} component={MyPetsStack} />
      <Tab.Screen name={SCREEN_KEYS.SETTINGS_STACK} component={SettingsStack} />
    </Tab.Navigator>
  );
}
