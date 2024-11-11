import React, {Fragment} from 'react';
import {Image, StyleSheet, StatusBar} from 'react-native';

import AppText from '@Components/AppText';

export default function LoginDecor() {
  return (
    <Fragment>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image
        source={require('@Assets/Images/Login1.png')}
        style={styles.image1}
      />
      <AppText style={styles.headerTitle}>Đăng nhập</AppText>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: 'white',
  },
  image1: {width: '100%'},
  logoLogin: {
    width: 167,
    aspectRatio: 167 / 70,
    alignSelf: 'center',
    bottom: 20,
  },
  button: {
    width: '91%',
    paddingVertical: 12,
    alignSelf: 'center',
    marginTop: 24,
  },
  mainView: {
    paddingHorizontal: 16,
  },
  customTextInput: {
    borderColor: '#8F9294',
  },
  headerTitle: {
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 28,
    color: '#404040',
    marginLeft: 30,
    borderBottomWidth: 3,
    borderColor: '#949494',
    alignSelf: 'flex-start',
    paddingBottom: 8,
    marginBottom: 20,
  },
});
