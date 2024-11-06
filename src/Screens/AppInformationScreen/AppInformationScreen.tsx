import React from 'react';

import AppScreenContainer from '@Components/AppScreenContainer';
import useAppInformation from './Services/useAppInformation';
import InformationGroup from '@Screens/SettingsScreen/Components/InformationGroup';
import AppInfoView from './Components/AppInfoView';

export default function AppInformationScreen() {
  const {infoGroup, privacyGroup} = useAppInformation();
  return (
    <AppScreenContainer>
      <AppInfoView />
      <InformationGroup {...infoGroup} />
      <InformationGroup {...privacyGroup} />
    </AppScreenContainer>
  );
}
