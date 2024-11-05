import SCREEN_KEYS from '@Constants/screenKeys';
import {StackActions, useNavigation} from '@react-navigation/native';

import {TInformationGroup} from '@Screens/SettingsScreen/Components/InformationGroup';

export default function useUserInfo() {
  const navigation = useNavigation();

  const userInfoGroup: TInformationGroup = {
    items: [
      {
        label: 'Tên đầy đủ',
        detailInformation: 'Nguyễn Thị Ngọc Trang',
      },
      {
        label: 'Tên hiển thị',
        detailInformation: 'Trang Nguyễn',
      },
      {
        label: 'Ngày sinh',
        detailInformation: '01/01/1998',
      },
      {
        label: 'Giới tính',
        detailInformation: 'Nữ',
      },
    ],
    label: 'Thông tin cá nhân',
    additionalButton: {
      label: 'Chỉnh sửa',
      onPress: () => {
        navigation.dispatch(StackActions.push(SCREEN_KEYS.USER_INFO_EDIT));
      },
    },
  };
  const loginGroup: TInformationGroup = {
    items: [
      {
        label: 'Tên đăng nhập',
        detailInformation: 'Nguyễn Thị Ngọc Trang',
      },
      {
        label: 'Email',
        detailInformation: 'trangntn1234@viettel.com.vn',
        showNextIcon: true,
        onPress: () => {
          navigation.dispatch(StackActions.push(SCREEN_KEYS.USER_EMAIL_EDIT));
        },
      },
      {
        label: 'Mật khẩu',
        detailInformation: '···········',
        showNextIcon: true,
        onPress: () => {
          navigation.dispatch(
            StackActions.push(SCREEN_KEYS.USER_PASSWORD_EDIT),
          );
        },
        detailInformationStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      },
      {
        label: 'Tài khoản liên kết',
        detailInformation: 'Email, Google, Viettel Cloud',
      },
    ],
    label: 'Thông tin đăng nhập',
  };
  const registrationGroup: TInformationGroup = {
    label: 'Gói dịch vụ Meeting',
    items: [
      {
        label: 'Cơ bản',
        detailInformation: 'Hiệu lực đến: 10/10/2025',
        reverseStyle: true,
      },
    ],
  };
  const additionalRegistrationGroup: TInformationGroup = {
    label: 'Gói bổ sung',
    items: [
      {
        label: 'Data 1G',
        detailInformation: 'Hiệu lực đến: 10/10/2025',
        reverseStyle: true,
      },
      {
        label: 'VCONFERENCE',
        detailInformation: 'Hiệu lực đến: 10/10/2025',
        reverseStyle: true,
      },
    ],
  };

  return {
    userInfoGroup,
    loginGroup,
    registrationGroup,
    additionalRegistrationGroup,
  };
}
