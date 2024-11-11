import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import AppButton from '@Components/AppButton';

export default function EmailConfirmButtons() {
  return (
    <View style={styles.container}>
      <AppButton title="Xác thực" containerStyle={styles.mainButton} />
      <View style={styles.openButtonsContainer}>
        <AppButton
          title="Mở Gmail"
          type="secondary"
          containerStyle={styles.openButtons}
          left={
            <Image
              source={require('@Assets/Images/Gmail.png')}
              style={styles.buttonImage}
            />
          }
        />
        <AppButton
          title="Mở Outlook"
          type="secondary"
          containerStyle={styles.openButtons}
          left={
            <Image
              source={require('@Assets/Images/Outlook.png')}
              style={styles.buttonImage}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 46,
  },
  mainButton: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 12,
  },
  openButtons: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: '49%',
  },
  openButtonsContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  buttonImage: {height: 18, width: 24, marginRight: 6},
});
