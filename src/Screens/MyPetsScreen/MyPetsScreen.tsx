import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {StackActions, useNavigation} from '@react-navigation/native';

import SCREEN_KEYS from '@Constants/screenKeys';

export function MyPetsScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() => {
          navigation.dispatch(StackActions.push(SCREEN_KEYS.SETTINGS));
        }}>
        <Text>10</Text>
      </Button>
    </View>
  );
}
