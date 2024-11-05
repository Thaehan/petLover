import {
  View,
  FlatList,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import AppText from '@Components/AppText';
import InformationItem, {TInformationItem} from './InformationItem';

const GREY_02 = '#73777A';
const RED = '#DD073A';

type TInformationGroupAdditionalButton = {
  label: string;
  onPress: () => void;
};

export type TInformationGroup = {
  items: TInformationItem[];
  label?: string;
  additionalButton?: TInformationGroupAdditionalButton;
  containerStyle?: ViewStyle;
};

export default function InformationGroup({
  items,
  label,
  additionalButton,
  containerStyle,
}: TInformationGroup) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <View style={styles.labelView}>
          <AppText style={styles.labelStyle}>{label}</AppText>
          {additionalButton && (
            <TouchableOpacity
              onPress={additionalButton.onPress}
              style={styles.addtionalButtonStyle}>
              <AppText style={styles.addtionalText}>
                {additionalButton.label}
              </AppText>
            </TouchableOpacity>
          )}
        </View>
      )}
      <FlatList
        data={items}
        renderItem={({item}) => <InformationItem {...item} />}
        style={styles.listStyle}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  labelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: GREY_02,
  },
  addtionalButtonStyle: {},
  listStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  addtionalText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: RED,
  },
});
