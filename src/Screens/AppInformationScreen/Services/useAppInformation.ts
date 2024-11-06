import {TInformationGroup} from '@Screens/SettingsScreen/Components/InformationGroup';

export default function useAppInformation() {
  const infoGroup: TInformationGroup = {
    items: [
      {
        label: 'Hướng dẫn sử dụng',
        onPress: () => {},
      },
      {
        label: 'Liên hệ hỗ trợ',
        detailInformation: '1800 8000 - nhánh 08',
      },
      {
        label: 'Gửi phản hồi',
        showNextIcon: true,
        onPress: () => {},
      },
    ],
  };
  const privacyGroup: TInformationGroup = {
    items: [{label: 'Điều khoản & chính sách', onPress: () => {}}],
  };

  return {infoGroup, privacyGroup};
}

export function useAppUpdateChecking() {
  return {
    appVersion: '3.0.1',
    isNewest: false,
  };
}
