import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import AppText from '@Components/AppText';
import useUserSettings from '../Services/useUserSettings';

export type TInformationCenterDetail = {
  avatar?: string;
  name?: string;
  email?: string;
};

export default function InformationCenterDetail() {
  const {userInformation} = useUserSettings();
  const {
    // avatar,
    email,
    name,
  } = userInformation;

  return (
    <View style={styles.container}>
      <Image
        source={require('@Assets/Images/logo.png')}
        style={styles.avatar}
        resizeMode="contain"
      />
      {name && <AppText>{name}</AppText>}
      {email && <AppText>{email}</AppText>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {height: 68, width: 68},
});
