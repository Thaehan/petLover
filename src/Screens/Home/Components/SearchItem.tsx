import {View, Text} from 'react-native';
import React from 'react';

import {TContact} from '@Api/ContactApi';

type TSearchItemProps = {
  item: TContact;
};

export function SearchItem({item}: TSearchItemProps) {
  return (
    <View>
      <Text
        style={{
          marginBottom: 40,
        }}>{`${item.first_name} ${item.last_name}`}</Text>
      <Text>{item.phoneNumber}</Text>
    </View>
  );
}
