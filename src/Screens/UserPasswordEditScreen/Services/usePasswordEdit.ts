import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

export default function usePasswordEdit() {
  const navigation = useNavigation();

  const onSubmitEditPassword = (data: any) => {
    console.log({data});
    navigation.goBack();
    Toast.show({
      type: 'success',
      text1: 'Cập nhật mật khẩu thành công!',
    });
  };

  return {
    onSubmitEditPassword,
  };
}
