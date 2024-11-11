import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import SCREEN_KEYS from '@Constants/screenKeys';
import {HomeStack, NotificationStack, SettingsStack} from './StackNavigator';

import AppText from '@Components/AppText';
import Svgs from '@Assets/Svgs';

const Tab = createBottomTabNavigator();

function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): ReactNode {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const getRouteName = () => {
          if (route.name === SCREEN_KEYS.HOME_STACK) {
            return 'Lịch họp';
          }
          if (route.name === SCREEN_KEYS.NOTIFICATION_STACK) {
            return 'Thông báo';
          }
          return 'Tài khoản';
        };

        const getIcon = () => {
          const props = isFocused ? styles.focusIcon : styles.unFocusIcon;
          if (route.name === SCREEN_KEYS.HOME_STACK) {
            return <Svgs.CalendarBottomIcon {...props} />;
          }
          if (route.name === SCREEN_KEYS.NOTIFICATION_STACK) {
            return <Svgs.NotificationBottomIcon {...props} />;
          }
          return <Svgs.AccountBottomIcon {...props} />;
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={styles.tab}>
            {getIcon()}
            <AppText
              style={[isFocused ? styles.focusText : styles.unFocusText]}>
              {getRouteName()}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export function BottomNavigator() {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={SCREEN_KEYS.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarLabel: 'Cuộc họp',
        }}
      />
      <Tab.Screen
        name={SCREEN_KEYS.NOTIFICATION_STACK}
        component={NotificationStack}
        options={{
          tabBarLabel: 'Thông báo',
        }}
      />
      <Tab.Screen
        name={SCREEN_KEYS.SETTINGS_STACK}
        component={SettingsStack}
        options={{
          tabBarLabel: 'Tài khoản',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  unFocusText: {
    color: '#606060',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18.2,
  },
  focusText: {
    color: '#EE0033',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18.2,
  },
  unFocusIcon: {
    color: '#606060',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18.2,
  },
  focusIcon: {
    color: '#EE0033',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18.2,
  },
});
