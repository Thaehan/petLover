import {useRef} from 'react';
import SCREEN_KEYS from '@Constants/screenKeys';
import {StackActions, useNavigation} from '@react-navigation/native';

import {TInformationGroup} from '@Screens/SettingsScreen/Components/InformationGroup';
import {TAppImageViewRef} from '@Components/AppImageView';

export default function useUserInfo() {
  const imageViewRef = useRef<TAppImageViewRef>(null);
  const navigation = useNavigation();
  const avatars = require('@Assets/Images/logo.png');

  const avatarGroup: TInformationGroup = {
    items: [
      {
        label: 'Ảnh đại diện',
        detailInformationImage: {
          source: require('@Assets/Images/logo.png'),
          style: {
            height: 30,
            width: 30,
          },
        },
        showNextIcon: true,
        onPress: () => {
          imageViewRef.current?.openImage();
        },
      },
    ],
  };
  const userInfoGroup: TInformationGroup = {
    items: [
      {
        label: 'Tên đầy đủ',
        detailInformation: 'Nguyễn Thị Ngọc Trangggggg',
        rightPartStyle: {maxWidth: '70%'},
      },
      {
        label: 'Tên hiển thị',
        detailInformation: 'Trang Nguyễn',
        rightPartStyle: {maxWidth: '70%'},
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
        detailInformation: 'Nguyễn Thị Ngọc Trangggg',
        rightPartStyle: {maxWidth: '65%'},
      },
      {
        label: 'Email',
        detailInformation: 'trangntn1234@viettel.com.vndfff',
        detailInformationTextProps: {numberOfLines: 1},
        rightPartStyle: {maxWidth: '76%'},
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
        rightPartStyle: {maxWidth: '60%'},
        labelStyle: {alignSelf: 'flex-start'},
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
    avatarGroup,
    userInfoGroup,
    loginGroup,
    registrationGroup,
    additionalRegistrationGroup,
    avatars,
    imageViewRef,
  };
}
