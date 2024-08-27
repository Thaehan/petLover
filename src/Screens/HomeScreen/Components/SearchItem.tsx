import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {TContact} from '@Api/ContactApi';
import {BORDER, getCurrentSize, PADDING_SIZE} from '@Theme/AppTheme';
import {AppLottieButton} from '@Components/AppButton';
import {AppImage, RESIZE_MODE} from '@Components/AppImage';

type TSearchItemProps = {
  item: TContact;
};

export function SearchItem({item}: TSearchItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <AppImage
          resizeMode={RESIZE_MODE.center}
          source={{
            uri: 'https://robohash.org/stefan-one',
          }}
          style={styles.avatar}
        />
        <View style={styles.infoContainer}>
          <Text
            style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
          <Text style={styles.phone}>{item.phoneNumber}</Text>
        </View>
      </View>
      <AppLottieButton
        initState={false}
        children={undefined}
        onStateTime={0}
        offStateTime={10}
        source={require('@Assets/Lotties/like.json')}
        style={{
          height: getCurrentSize(50),
          width: getCurrentSize(50),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING_SIZE.lg,
    paddingVertical: PADDING_SIZE.md,
    marginBottom: PADDING_SIZE.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: getCurrentSize(40),
    width: getCurrentSize(40),
    borderRadius: BORDER.circle,
  },
  infoContainer: {
    paddingHorizontal: PADDING_SIZE.md,
  },
  name: {},
  phone: {},
  likeContainer: {},
});
