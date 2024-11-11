import React from 'react';
import {Image, StatusBar, StyleSheet} from 'react-native';

import {useLocalization} from '@Translations/useLocalization';
import {useBackHandlerExit} from '@Utils/BackHandler';
import AppButton from '@Components/AppButton';
import {StackActions, useNavigation} from '@react-navigation/native';
import SCREEN_KEYS from '@Constants/screenKeys';
import AppScreenContainer from '@Components/AppScreenContainer';

export default function IntroScreen() {
  useBackHandlerExit();
  useLocalization();

  const navigation = useNavigation();

  const handleStart = () => {
    navigation.dispatch(StackActions.replace(SCREEN_KEYS.LOGIN));
  };

  return (
    <AppScreenContainer
      style={styles.container}
      containerStyle={styles.scrollViewContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image
        source={require('@Assets/Images/Intro1.png')}
        style={styles.image1}
      />
      <Image
        source={require('@Assets/Images/Intro2.png')}
        style={styles.image2}
      />
      <Image
        source={require('@Assets/Images/Intro3.png')}
        style={styles.image3}
      />
      <AppButton
        title="Bắt đầu"
        containerStyle={styles.button}
        onPress={handleStart}
      />
    </AppScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingVertical: 0,
    paddingBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image1: {width: '100%', alignSelf: 'center'},
  image2: {
    width: 167,
    aspectRatio: 167 / 70,
    alignSelf: 'center',
    bottom: 30,
  },
  image3: {width: '100%'},
  button: {
    width: '80%',
    paddingVertical: 12,
    alignSelf: 'center',
    marginTop: 40,
  },
});
