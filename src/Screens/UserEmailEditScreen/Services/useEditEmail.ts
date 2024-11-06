import {StackActions, useNavigation} from '@react-navigation/native';
import SCREEN_KEYS from '@Constants/screenKeys';

export default function useEditEmail() {
  const navigation = useNavigation();

  const onSubmitEditPassword = (data: any) => {
    console.log({data});
    if (data) {
      navigation.dispatch(
        StackActions.push(SCREEN_KEYS.USER_EMAIL_EDIT_CONFIRM),
      );
    }
  };

  return {
    onSubmitEditPassword,
  };
}
