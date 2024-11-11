import React, {Fragment} from 'react';
import {
  Image,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';

import AppText from '@Components/AppText';
import AppIcon from '@Components/AppIcon';
import Svgs from '@Assets/Svgs';
import {StackActions, useNavigation} from '@react-navigation/native';

function ImageButtons() {
  const navigation = useNavigation();

  const onPressGoBack = () => {
    navigation.dispatch(StackActions.pop());
  };

  const onPressOptions = () => {};

  return (
    <View style={styles.headerButtons}>
      <AppIcon
        type="Octicons"
        name="chevron-left"
        color="white"
        containerStyle={styles.backButton}
        onPress={onPressGoBack}
      />
      <TouchableOpacity onPress={onPressOptions}>
        <Svgs.Options color={'white'} />
      </TouchableOpacity>
    </View>
  );
}

export default function JoinAGuestDecor() {
  return (
    <Fragment>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image
        source={require('@Assets/Images/JoinAGuest.png')}
        style={styles.image1}
      />
      <AppText style={styles.headerTitle}>Tham gia ngay</AppText>
      <ImageButtons />
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
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '91%',
    top: '14%',
    alignSelf: 'center',
  },
  backButton: {
    paddingHorizontal: 8,
  },
});
