import React, {ReactNode} from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import AppText from './AppText';

type TAppButtonProps = Omit<TouchableOpacityProps, 'children' | 'style'> & {
  title: string;
  type?: 'primary' | 'secondary';
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  left?: ReactNode;
  right?: ReactNode;
};

export function AppButton({
  title,
  containerStyle,
  textStyle,
  onPress,
  type = 'primary',
  left,
  right,
  disabled,
  ...rest
}: TAppButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        type === 'primary' ? styles.primaryButton : styles.secondaryButton,
        disabled && type === 'primary' && styles.disabledPrimaryButton,
        disabled && type === 'secondary' && styles.disabledSecondaryButton,
        styles.container,
        containerStyle,
      ]}
      {...rest}>
      {left && left}
      <AppText
        style={[
          type === 'primary' ? styles.primaryText : styles.secondaryText,
          disabled && type === 'primary' && styles.disabledPrimaryText,
          disabled && type === 'secondary' && styles.disabledSecondaryText,
          styles.text,
          {...textStyle},
        ]}>
        {title}
      </AppText>
      {right && right}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#CB003D',
  },
  disabledPrimaryText: {
    color: '#8F9294',
  },
  disabledSecondaryText: {
    color: '#8F9294',
  },
  primaryButton: {
    backgroundColor: '#CB003D',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderColor: '#CB003D',
    borderWidth: 1,
  },
  disabledPrimaryButton: {
    backgroundColor: '#8F929452',
  },
  disabledSecondaryButton: {
    backgroundColor: 'white',
    borderColor: '#44494D',
  },
});
