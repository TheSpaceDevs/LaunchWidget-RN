import React, { useContext } from 'react';
import { Text } from 'react-native';

import { LinkText, SubtitleText } from './StyledComponents';
import { StateContext } from '../AppContext';

export default () => {
  const state = useContext(StateContext);
  let numberOfLaunchesToday = state.launchesToday.length;

  // If we have a launch today, do not show the next launch
  if (numberOfLaunchesToday !== 0) {
    return null;
  }

  return (
    <>
      <Text>Next</Text>
      <SubtitleText>
        <SubtitleText>The </SubtitleText>
        <LinkText>next launch</LinkText>
        <SubtitleText> is in 43 hours</SubtitleText>
      </SubtitleText>
    </>
  );
};
