import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import React from 'react';

import AppText from '@Components/AppText';
import AppIcon from '@Components/AppIcon';

const TEXT_COLOR = '#44494D';

export type TInformationItem = {
  label: string;
  labelStyle?: TextStyle;
  detailInformation?: string;
  detailInformationStyle?: TextStyle;
  onPress?: () => void;
  style?: ViewStyle;
  showNextIcon?: boolean;
  reverseStyle?: boolean;
};

export default function InformationItem({
  label,
  labelStyle,
  detailInformation,
  detailInformationStyle,
  onPress,
  style,
  showNextIcon,
  reverseStyle,
}: TInformationItem) {
  return (
    <TouchableOpacity
      style={[styles.item, style]}
      onPress={onPress}
      activeOpacity={onPress ? 0.5 : 1}>
      <AppText
        style={[
          reverseStyle ? styles.detailInformation : styles.labelStyle,
          {...labelStyle},
        ]}>
        {label}
      </AppText>
      <View style={styles.rightPart}>
        {detailInformation && (
          <AppText
            style={[
              reverseStyle ? styles.labelStyle : styles.detailInformation,
              {...detailInformationStyle},
            ]}>
            {detailInformation}
          </AppText>
        )}
        {showNextIcon && (
          <AppIcon
            color={TEXT_COLOR}
            type="Octicons"
            name="chevron-right"
            size={20}
            onPress={onPress}
            containerStyle={styles.nextIcon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: TEXT_COLOR,
  },
  rightPart: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  detailInformation: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: TEXT_COLOR,
  },
  nextIcon: {
    marginLeft: 12,
  },
});
