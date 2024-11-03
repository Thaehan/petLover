import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native';

import {useAppDispatch, useAppSelector} from '@Hooks/Hooks';
import {setDeviceToken} from '@Store/Slices/systemSlice';

export function HomeScreen() {
  const dispatch = useAppDispatch();
  const {} = useAppSelector(state => state.system);

  const fetchUser = () => {
    dispatch(setDeviceToken(Math.random().toString()));
  };

  return (
    <View style={styles.container}>
      <Button title="Reload User" onPress={fetchUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
