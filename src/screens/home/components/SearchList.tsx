import {StyleSheet} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

import {useSearch} from '../data/useSearch';
import {SearchItem} from './SearchItem';

export function SearchList() {
  const {data} = useSearch();

  return (
    <FlashList
      data={data}
      renderItem={({item}) => <SearchItem item={item} />}
      keyExtractor={item =>
        `${item.id},${item.first_name},${item.last_name},${item.phoneNumber}`
      }
      estimatedItemSize={40}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listStyle: {},
  listContainer: {
    backgroundColor: 'cyan',
    paddingBottom: 12,
  },
});
