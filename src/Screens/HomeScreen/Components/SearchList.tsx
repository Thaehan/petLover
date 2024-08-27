import React from 'react';
import {StyleSheet} from 'react-native';

import {AppList} from '@Components/AppList';
import {useLocalization} from '@Translations/useLocalization';
import {useSearch} from '../Service/useSearch';
import {SearchItem} from './SearchItem';
import {PADDING_SIZE} from '@Theme/AppTheme';

export function SearchList() {
  const {translate} = useLocalization();
  const {data, isRefetching, refetch, isLoading} = useSearch();

  return (
    <AppList
      data={data}
      renderItem={({item}) => <SearchItem item={item} />}
      isLoading={isLoading}
      keyExtractor={item =>
        `${item.id},${item.first_name},${item.last_name},${item.phoneNumber}`
      }
      refreshing={isRefetching}
      onRefresh={refetch}
      estimatedItemSize={40}
      contentContainerStyle={styles.listContainer}
      emptyTitle={translate('common.empty_data')}
    />
  );
}

const styles = StyleSheet.create({
  listStyle: {},
  listContainer: {
    paddingBottom: PADDING_SIZE.md,
  },
});
