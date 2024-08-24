import {StyleSheet} from 'react-native';
import React from 'react';

import AppList from '@Components/AppList';
import {useSearch} from '../Service/useSearch';
import {SearchItem} from './SearchItem';

export function SearchList() {
  const {data} = useSearch();

  return (
    <AppList
      data={data}
      renderItem={({item}) => <SearchItem item={item} />}
      keyExtractor={(item, index) =>
        //Không dùng index cho keyExtractor
        `${item.id},${item.first_name},${item.last_name},${item.phoneNumber},${index}`
      }
      estimatedItemSize={40}
      contentContainerStyle={styles.listContainer}
      emptyTitle={'Empty List'}
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
