import {StackActions, useNavigation} from '@react-navigation/native';

import SCREEN_KEYS from '@Constants/screenKeys';
import {TInformationGroup} from '../Components/InformationGroup';
import {TInformationCenterDetail} from '../Components/InformationCenterDetail';

export default function useUserSettings() {
  const navigation = useNavigation();

  const userInfoGroup: TInformationGroup = {
    items: [
      {
        label: 'Hồ sơ cá nhân',
        onPress: () => {
          navigation.dispatch(StackActions.push(SCREEN_KEYS.USER_INFO));
        },
        showNextIcon: true,
      },
      {
        label: 'Ngôn ngữ',
        onPress: () => {
          navigation.dispatch(StackActions.push(SCREEN_KEYS.USER_LANGUAGE));
        },
        showNextIcon: true,
        detailInformation: 'Tiếng Việt (VIE)',
      },
    ],
  };
  const appInfoGroup: TInformationGroup = {
    items: [
      {
        label: 'Thông tin về Viettel Meeting',
        showNextIcon: true,
        onPress: () => {},
      },
      {
        label: 'Liên hệ hỗ trợ',
        detailInformation: '1800 8000 - nhánh 08',
      },
    ],
  };
  const functionalGroup: TInformationGroup = {
    items: [{label: 'Đăng xuất', onPress: () => {}}],
  };

  const userInformation: TInformationCenterDetail = {
    avatar:
      'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-58.jpg',
    name: 'Nguyễn Thị Ngọc Trang',
    email: 'trangnt1234@gmail.com',
  };

  return {userInfoGroup, appInfoGroup, functionalGroup, userInformation};
}
