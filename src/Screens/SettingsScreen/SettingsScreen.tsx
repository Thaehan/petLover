import {View} from 'react-native';
import React from 'react';

import useUserSettings from './Services/useUserSettings';
import InformationGroup from './Components/InformationGroup';
import InformationCenterDetail from './Components/InformationCenterDetail';

export function SettingsScreen() {
  const {appInfoGroup, functionalGroup, userInfoGroup} = useUserSettings();

  return (
    <View>
      <InformationCenterDetail />
      <InformationGroup {...userInfoGroup} />
      <InformationGroup {...appInfoGroup} />
      <InformationGroup {...functionalGroup} />
    </View>
  );
}
