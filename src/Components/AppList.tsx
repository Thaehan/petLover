import React from 'react';
import {FlashList, FlashListProps} from '@shopify/flash-list';
import {Text} from 'react-native-paper';
import {View} from 'react-native';

type TAppListProps<T> = FlashListProps<T> & {
  emptyTitle: string;
};

type TListEmptyComponent = {
  title: string;
  lottieFile?: NodeRequire;
};

function ListEmptyComponent({title, lottieFile}: TListEmptyComponent) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default function AppList<T>({renderItem, ...rest}: TAppListProps<T>) {
  return (
    <FlashList
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      {...rest}
    />
  );
}
