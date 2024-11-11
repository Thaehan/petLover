import {View, StyleSheet} from 'react-native';
import React from 'react';

import AppText from '@Components/AppText';
import {useAppUpdateChecking} from '../Services/useAppInformation';
import AppButton from '@Components/AppButton';

export default function AppInfoView() {
  const {isNewest, appVersion} = useAppUpdateChecking();

  return (
    <View style={styles.container}>
      <View>
        <AppText style={styles.version}>{`Phiên bản ${appVersion}`}</AppText>
        <AppText style={styles.description}>
          {isNewest
            ? 'Bạn đang sử dụng phiên bản mới nhất'
            : 'Bạn đang sử dụng phiên bản cũ'}
        </AppText>
      </View>
      {!isNewest && (
        <AppButton
          title="Cập nhật"
          containerStyle={styles.button}
          textStyle={styles.text}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  version: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22.5,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 24,
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#EE00330F',
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
    color: '#EE0033',
  },
});
