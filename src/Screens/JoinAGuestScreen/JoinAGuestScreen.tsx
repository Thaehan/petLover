import React from 'react';
import {StyleSheet} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form';

import AppScreenContainer from '@Components/AppScreenContainer';
import {useLocalization} from '@Translations/useLocalization';
import {DEVICE_WIDTH} from '@Constants/commons';

import JoinAGuestDecor from './Components/JoinAGuestDecor';

export default function JoinAGuestScreen() {
  const {
    // changeLanguage,
    // currentLanguage
  } = useLocalization();

  const form = useForm({
    defaultValues: {
      roomId: '',
    },
  });

  return (
    <FormProvider {...form}>
      <AppScreenContainer
        style={styles.container}
        containerStyle={styles.scrollViewContainer}>
        <JoinAGuestDecor />
      </AppScreenContainer>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingVertical: 0,
    paddingBottom: 16,
  },
  container: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: 'white',
  },
  image1: {width: DEVICE_WIDTH},
  image2: {width: DEVICE_WIDTH},
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
    marginLeft: 12,
    borderBottomWidth: 3,
    borderColor: '#949494',
    alignSelf: 'flex-start',
    paddingBottom: 8,
    marginBottom: 20,
  },
});