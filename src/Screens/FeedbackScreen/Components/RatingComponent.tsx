import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Control, Controller} from 'react-hook-form';

import Svgs from '@Assets/Svgs';
import AppText from '@Components/AppText';

export type TRatingComponent = {
  control: Control<any>;
  name: string;
};

export type TRatingStar = {
  value: number;
  label: string;
};

export default function RatingComponent({control, name}: TRatingComponent) {
  const listStars: TRatingStar[] = [
    {value: 1, label: 'Rất tệ'},
    {value: 2, label: 'Tệ'},
    {value: 3, label: 'Bình thường'},
    {value: 4, label: 'Tuyệt'},
    {value: 5, label: 'Rất tuyệt'},
  ];

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        validate: value => {
          if (!value) {
            return 'Vui lòng điền đánh giá của bạn!';
          }
          return true;
        },
      }}
      render={({field: {onChange, value}, fieldState: {error}}) => {
        return (
          <>
            <View style={styles.container}>
              {listStars.map(({value: itemValue, label}) => {
                return (
                  <TouchableOpacity
                    key={itemValue}
                    style={styles.starContainer}
                    onPress={() => onChange(itemValue)}>
                    <Svgs.RatingStar isOn={itemValue <= value} />
                    {itemValue === value && (
                      <AppText style={styles.starLabel}>{label}</AppText>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
            {error?.message && (
              <AppText style={styles.errorText}>{error?.message}</AppText>
            )}
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  starContainer: {
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  starLabel: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  errorText: {
    color: '#EE0033',
    marginTop: 4,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
