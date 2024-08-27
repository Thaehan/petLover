import {useDispatch, useSelector} from 'react-redux';
import {useQuery} from '@tanstack/react-query';

import QUERY_KEYS from '@Constants/queryKeys';
import ContactApi from '@Api/ContactApi';
import {searchContacts} from '@Utils/Algorithm';
import {RootState} from '@Store/index';
import {setContacts} from '@Store/Reducers/offlineDataReducer';

//Setup stale time 2 mins
const SEARCH_CONTACT_STALETIME = 1000 * 60 * 2;

export function useSearch() {
  const dispatch = useDispatch();
  const contacts = useSelector(
    (state: RootState) => state.offlineData.contacts,
  );
  const searchText = useSelector(
    (state: RootState) => state.searchContact.searchText,
  );

  console.log(contacts);

  const searchQuery = useQuery({
    queryKey: [QUERY_KEYS.SEARCH_CONTACT],
    queryFn: ContactApi.getContacts,
    //Setup stale time for checking the new fresh
    staleTime: SEARCH_CONTACT_STALETIME,
    onSuccess: data => {
      //Set to offline data every refetch instead of search time.
      dispatch(setContacts(data));
    },
    select: data => {
      //return offline data if response is error (Base on backend)
      if (!data) {
        return contacts;
      }
      return searchContacts(searchText, data);
    },
    onError: () => {
      //return offline data if response is error (Base on backend)
      return contacts;
    },
  });

  return searchQuery;
}
