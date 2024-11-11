import {StackActions, useNavigation} from '@react-navigation/native';

import SCREEN_KEYS from '@Constants/screenKeys';

export default function useJoinAGuest() {
  const navigation = useNavigation();

  const onPressJoin = (data?: any) => {
    console.log({data});
  };

  return {
    onPressJoin,
  };
}
