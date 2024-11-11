import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SCREEN_KEYS from '@Constants/screenKeys';
import {BottomNavigator} from './BottomNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
      }}>
      <Drawer.Screen
        name={SCREEN_KEYS.BOTTOM_NAVIGATOR}
        component={BottomNavigator}
      />
    </Drawer.Navigator>
  );
}
