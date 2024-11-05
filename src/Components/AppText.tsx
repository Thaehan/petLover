import {StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';

export type TAppText = {
  children: string;
  style?: TextStyle | TextStyle[];
};

export default function AppText({children, style}: TAppText) {
  return <Text style={[styles.default, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    // fontFamily: ''
  },
});
