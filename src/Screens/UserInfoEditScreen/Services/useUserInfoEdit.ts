import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

import {TRadioOption} from '@Components/AppRadioSelect';

export default function useUserInfoEdit() {
  const navigation = useNavigation();

  const genderOptions: TRadioOption[] = [
    {label: 'Nam', value: 'M'},
    {label: 'Nữ', value: 'F'},
    {label: 'Khác', value: 'O'},
  ];

  const onSubmitEditInfo = (data: any) => {
    //handleFetch
    console.log({data});
    navigation.goBack();
    Toast.show({
      type: 'success',
      text1: 'Cập nhật thông tin cá nhân thành công!',
    });
  };

  return {
    genderOptions,
    onSubmitEditInfo,
  };
}
