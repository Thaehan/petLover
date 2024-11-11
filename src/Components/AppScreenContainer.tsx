import React, {ReactNode} from 'react';
import {ScrollView, StyleProp, StyleSheet, ViewStyle} from 'react-native';

export type TAppScreenContainer = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function AppScreenContainer({
  children,
  style,
  containerStyle,
}: TAppScreenContainer) {
  return (
    <ScrollView
      style={style}
      contentContainerStyle={[styles.container, containerStyle]}
      keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
});
