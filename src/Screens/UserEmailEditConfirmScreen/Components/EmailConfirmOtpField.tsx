import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useFormContext} from 'react-hook-form';

import AppOtpField from '@Components/AppOtpField';
import AppIcon from '@Components/AppIcon';
import AppText from '@Components/AppText';
import {useCountdown} from '../Services/useEditEmailConfirm';

export default function EmailConfirmOtpField() {
  const {control} = useFormContext();
  const {start, secondsLeft, formattedTime} = useCountdown(20);

  return (
    <View>
      <View style={styles.container}>
        <AppOtpField
          control={control}
          name="otp"
          containerStyle={styles.otpContainer}
        />
      </View>
      <View style={styles.cooldown}>
        <AppIcon
          name="clock-outline"
          size={20}
          color="#44494D"
          containerStyle={styles.clockIcon}
        />
        <AppText style={styles.cooldownText}>{formattedTime()}</AppText>
      </View>
      <AppText style={styles.tryAgainContainer}>
        {`Bạn chưa nhận được email? `}
      </AppText>
      <AppText style={styles.tryAgainContainer}>
        {`Hãy kiểm tra thư rác hoặc `}
        <AppText
          onPress={start}
          style={[styles.tryAgain, !!secondsLeft && styles.disabledTryAgain]}
          disabled={!!secondsLeft}>
          Thử lại
        </AppText>
        {`.`}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  otpContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 8,
  },
  cooldown: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 50,
    marginTop: 8,
    marginBottom: 16,
  },
  clockIcon: {},
  cooldownText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    marginLeft: 2,
    color: '#44494D',
  },
  tryAgain: {
    color: '#DD073A',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  disabledTryAgain: {
    color: '#8F9294',
  },
  tryAgainContainer: {
    color: '#44494D',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 2,
  },
});
