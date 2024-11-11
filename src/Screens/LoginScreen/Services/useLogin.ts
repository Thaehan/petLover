import {StackActions, useNavigation} from '@react-navigation/native';

import SCREEN_KEYS from '@Constants/screenKeys';

export default function useLogin() {
  const navigation = useNavigation();

  const onPressLogin = (data?: any) => {
    console.log({data});
    navigation.dispatch(StackActions.replace(SCREEN_KEYS.DRAWER_NAVIGATOR));
  };

  const onPressForget = () => {};

  const onJoinAGuest = () => {
    navigation.dispatch(StackActions.push(SCREEN_KEYS.JOINT_A_GUEST));
  };

  const onPressCloudLogin = () => {};

  const onPressGoogleLogin = () => {};

  return {
    onPressLogin,
    onPressForget,
    onJoinAGuest,
    onPressCloudLogin,
    onPressGoogleLogin,
  };
}
