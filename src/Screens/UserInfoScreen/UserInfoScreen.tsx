import React from 'react';
import {ScrollView} from 'react-native';

import useUserInfo from './Services/useUserInfo';
import InformationGroup from '@Screens/SettingsScreen/Components/InformationGroup';

export default function UserInfoScreen() {
  const {
    userInfoGroup,
    loginGroup,
    registrationGroup,
    additionalRegistrationGroup,
  } = useUserInfo();

  return (
    <ScrollView>
      <InformationGroup {...userInfoGroup} />
      <InformationGroup {...loginGroup} />
      <InformationGroup {...registrationGroup} />
      <InformationGroup {...additionalRegistrationGroup} />
    </ScrollView>
  );
}
