import React from 'react';

import InformationGroup from '@Screens/SettingsScreen/Components/InformationGroup';
import AppImageView from '@Components/AppImageView';
import useUserInfo from './Services/useUserInfo';
import AppScreenContainer from '@Components/AppScreenContainer';

export default function UserInfoScreen() {
  const {
    avatarGroup,
    userInfoGroup,
    loginGroup,
    registrationGroup,
    additionalRegistrationGroup,
    avatars,
    imageViewRef,
  } = useUserInfo();

  return (
    <AppScreenContainer>
      <InformationGroup {...avatarGroup} />
      <InformationGroup {...userInfoGroup} />
      <InformationGroup {...loginGroup} />
      <InformationGroup {...registrationGroup} />
      <InformationGroup {...additionalRegistrationGroup} />
      <AppImageView ref={imageViewRef} image={avatars} />
    </AppScreenContainer>
  );
}
