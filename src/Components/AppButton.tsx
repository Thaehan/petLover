import React, {ReactNode} from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import AppText from './AppText';

enum EAppButtonType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

type TAppButtonProps = Omit<TouchableOpacityProps, 'children'> & {
  title: string;
  type?: EAppButtonType;
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
  type = EAppButtonType.PRIMARY,
  left,
  right,
  ...rest
}: TAppButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        type === EAppButtonType.PRIMARY
          ? styles.primaryButton
          : styles.secondaryButton,
        styles.container,
        containerStyle,
      ]}
      {...rest}>
      {left && right}
      <AppText
        style={[
          type === EAppButtonType.PRIMARY
            ? styles.primaryText
            : styles.secondaryText,
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
  primaryButton: {
    backgroundColor: '#CB003D',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderColor: '#CB003D',
    borderWidth: 1,
  },
});
