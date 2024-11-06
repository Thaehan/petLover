import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {TRadioOption} from '@Components/AppRadioSelect';

export default function useUserLanguage() {
  const navigation = useNavigation();
  const languageOptions: TRadioOption[] = [
    {label: 'Tiếng Việt', value: 'VI'},
    {label: 'Tiếng Anh', value: 'EN'},
  ];

  const onSubmitLanguage = (data: any) => {
    //handleFetch
    console.log({data});
    navigation.goBack();
    Toast.show({
      type: 'success',
      text1: 'Thay đổi ngôn ngữ thành công',
    });
  };

  return {
    onSubmitLanguage,
    languageOptions,
  };
}
