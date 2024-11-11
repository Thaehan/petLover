import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import SCREEN_KEYS from '@Constants/screenKeys';
import HomeScreen from '@Screens/HomeScreen/HomeScreen';
import SettingsScreen from '@Screens/SettingsScreen/SettingsScreen';
import UserInfoEditScreen from '@Screens/UserInfoEditScreen/UserInfoEditScreen';
import UserInfoScreen from '@Screens/UserInfoScreen/UserInfoScreen';
import UserPasswordEditScreen from '@Screens/UserPasswordEditScreen/UserPasswordEditScreen';
import UserLanguageScreen from '@Screens/UserLanguageScreen/UserLanguageScreen';
import UserEmailEditScreen from '@Screens/UserEmailEditScreen/UserEmailEditScreen';
import UserEmailEditConfirmScreen from '@Screens/UserEmailEditConfirmScreen/UserEmailEditConfirmScreen';
import AppInformationScreen from '@Screens/AppInformationScreen/AppInformationScreen';
import FeedbackScreen from '@Screens/FeedbackScreen/FeedbackScreen';
import NotificationScreen from '@Screens/NotificationScreen/NotificationScreen';

const Stack = createNativeStackNavigator();

const STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  headerStyle: {backgroundColor: '#cb002b'},
  headerTitleStyle: {color: 'white'},
  headerTitleAlign: 'center',
  headerTintColor: 'white',
};

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen name={SCREEN_KEYS.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export function NotificationStack() {
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen
        name={SCREEN_KEYS.NOTIFICATION}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
}

export function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen name={SCREEN_KEYS.SETTINGS} component={SettingsScreen} />
      <Stack.Screen
        name={SCREEN_KEYS.USER_INFO}
        component={UserInfoScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SCREEN_KEYS.USER_INFO_EDIT}
        component={UserInfoEditScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SCREEN_KEYS.USER_PASSWORD_EDIT}
        component={UserPasswordEditScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SCREEN_KEYS.USER_EMAIL_EDIT}
        component={UserEmailEditScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SCREEN_KEYS.USER_EMAIL_EDIT_CONFIRM}
        component={UserEmailEditConfirmScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SCREEN_KEYS.USER_LANGUAGE}
        component={UserLanguageScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SCREEN_KEYS.APP_INFORMATION}
        component={AppInformationScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SCREEN_KEYS.FEEDBACK}
        component={FeedbackScreen}
      />
    </Stack.Navigator>
  );
}
