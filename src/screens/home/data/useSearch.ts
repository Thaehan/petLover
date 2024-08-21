import {useQuery} from '@tanstack/react-query';

import QUERY_KEYS from '../../../Constants/queryKeys';
import ContactApi from '../../../Api/ContactApi';

export function useSearch() {
  const searchQuery = useQuery({
    queryKey: [QUERY_KEYS.SEARCH_CONTACT],
    queryFn: ContactApi.getContacts,
    select: data => {
      console.log({data});
      return [...data];
    },
  });

  return searchQuery;
}
