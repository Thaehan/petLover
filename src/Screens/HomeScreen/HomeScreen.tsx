import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator, Button, Text} from 'react-native';
import DeviceSettingModule from 'react-native-device-setting';

import {fetchUserRequest} from '@Store/Slices/testSagaSlice';
import {useAppDispatch, useAppSelector} from '@Hooks/Hooks';

export function HomeScreen() {
  const dispatch = useAppDispatch();
  const {loading, user, error} = useAppSelector(state => state.testSaga);

  DeviceSettingModule.useCompassListener(data => {
    console.log({data});
  });

  const fetchUser = () => {
    dispatch(fetchUserRequest());
  };

  return (
    <View style={styles.container}>
      <Button
        title="Start"
        onPress={() => {
          DeviceSettingModule.startListeningCompass();
        }}
      />
      <Button
        title="Stop"
        onPress={() => {
          DeviceSettingModule.stopListeningCompass();
        }}
      />
      {loading && <ActivityIndicator />}
      {user && (
        <View>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </View>
      )}
      {error && <Text>Error: {error}</Text>}
      <Button title="Reload User" onPress={fetchUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
