import {View} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {StackActions, useNavigation} from '@react-navigation/native';

import SCREEN_KEYS from '@Constants/screenKeys';

export function ExploreScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() => {
          navigation.dispatch(StackActions.push(SCREEN_KEYS.SETTINGS));
        }}>
        <Text>Login</Text>
      </Button>
    </View>
  );
}
