import React from 'react';
import {
  RefreshControl,
  RefreshControlProps,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {FlashList, FlashListProps} from '@shopify/flash-list';

import AppLoading from './AppLoading';
import {FONT_SIZE} from '@Theme/AppTheme';
import {DEVICE_WIDTH} from '@Constants/commons';

type TAppListProps<T> = FlashListProps<T> &
  RefreshControlProps & {
    emptyTitle: string;
    isLoading: boolean;
  };

type TListEmptyComponent = {
  title: string;
  lottieFile?: NodeRequire;
};

function ListEmptyComponent({title}: TListEmptyComponent) {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{title}</Text>
    </View>
  );
}

export default function AppList<T>({
  isLoading,
  renderItem,
  refreshing,
  onRefresh,
  emptyTitle,
  ...rest
}: TAppListProps<T>) {
  return (
    <FlashList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={renderItem}
      ListEmptyComponent={
        isLoading ? <AppLoading /> : <ListEmptyComponent title={emptyTitle} />
      }
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyText: {
    fontSize: FONT_SIZE.xxl,
  },
  emptyAnimation: {
    width: DEVICE_WIDTH,
    aspectRatio: 1,
  },
});
