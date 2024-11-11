import React from 'react';

import useUserSettings from './Services/useUserSettings';
import InformationGroup from './Components/InformationGroup';
import InformationCenterDetail from './Components/InformationCenterDetail';
import AppScreenContainer from '@Components/AppScreenContainer';

export default function SettingsScreen() {
  const {appInfoGroup, functionalGroup, userInfoGroup} = useUserSettings();

  return (
    <AppScreenContainer>
      <InformationCenterDetail />
      <InformationGroup {...userInfoGroup} />
      <InformationGroup {...appInfoGroup} />
      <InformationGroup {...functionalGroup} />
    </AppScreenContainer>
  );
}
