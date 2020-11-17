import React from 'react';
import { View } from 'react-native';

import { CenterContainer } from './StyledComponents';
import LaunchToday from './LaunchToday';
import LaunchTomorrow from './LaunchTomorrow';

export const LaunchText = () => {
  return (
    <CenterContainer>
      <LaunchToday />
      <LaunchTomorrow />
    </CenterContainer>
  );
};
