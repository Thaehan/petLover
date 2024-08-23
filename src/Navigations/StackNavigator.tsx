import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import SCREEN_KEYS from '@Constants/screenKeys';
import {HelpScreen} from '@Screens/HelpScreen/HelpScreen';
import {HomeScreen} from '@Screens/HomeScreen/HomeScreen';
import {ChatScreen} from '@Screens/ChatScreen/ChatScreen';
import {MyPetsScreen} from '@Screens/MyPetsScreen/MyPetsScreen';
import {SettingsScreen} from '@Screens/SettingsScreen/SettingsScreen';
import {ExploreScreen} from '@Screens/ExploreScreen/ExploreScreen';

const Stack = createNativeStackNavigator();

const STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen name={SCREEN_KEYS.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREEN_KEYS.HELP} component={HelpScreen} />
    </Stack.Navigator>
  );
}

export function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen name={SCREEN_KEYS.EXPLORE} component={ExploreScreen} />
      <Stack.Screen name={SCREEN_KEYS.HELP} component={HelpScreen} />
    </Stack.Navigator>
  );
}

export function ChatStack() {
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen name={SCREEN_KEYS.CHAT} component={ChatScreen} />
      <Stack.Screen name={SCREEN_KEYS.HELP} component={HelpScreen} />
    </Stack.Navigator>
  );
}

export function MyPetsStack() {
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen name={SCREEN_KEYS.MY_PET} component={MyPetsScreen} />
      <Stack.Screen name={SCREEN_KEYS.HELP} component={HelpScreen} />
    </Stack.Navigator>
  );
}

export function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen name={SCREEN_KEYS.SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={SCREEN_KEYS.HELP} component={HelpScreen} />
    </Stack.Navigator>
  );
}
