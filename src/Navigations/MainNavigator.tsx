import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@Screens/LoginScreen/LoginScreen';
import SCREEN_KEYS from '@Constants/screenKeys';
import DrawerNavigation from './DrawerNavigator';
import IntroScreen from '@Screens/IntroScreen/IntroScreen';
import ForgetPasswordScreen from '@Screens/ForgetPasswordScreen/ForgetPasswordScreen';
import JoinAGuestScreen from '@Screens/JoinAGuestScreen/JoinAGuestScreen';

const Stack = createNativeStackNavigator();

export function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREEN_KEYS.INTRO}
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_KEYS.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_KEYS.JOINT_A_GUEST}
        component={JoinAGuestScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_KEYS.FORGET_PASSWORD}
        component={ForgetPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_KEYS.DRAWER_NAVIGATOR}
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
