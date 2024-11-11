import {StackActions, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function useFeedback() {
  const navigation = useNavigation();
  const onSubmitFeedback = (data: any) => {
    console.log({data});
    navigation.dispatch(StackActions.pop());
    Toast.show({
      text1: 'Gửi phản hồi thành công',
    });
  };

  return {onSubmitFeedback};
}
