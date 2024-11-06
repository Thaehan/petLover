import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';

export type TAppText = {
  children: any;
  style?: StyleProp<TextStyle>;
} & TextProps;

export default function AppText({children, style, ...rest}: TAppText) {
  return (
    <Text style={[styles.default, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    // fontFamily: ''
  },
});
