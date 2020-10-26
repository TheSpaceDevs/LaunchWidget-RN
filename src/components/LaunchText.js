import React, { useContext } from 'react';
import { Linking } from 'react-native';
import converter from 'number-to-words';

import { StateContext } from '../AppContext';
import { StatusText, SubtitleText, CenterContainer } from './StyledComponents';

export const LaunchText = () => {
  const state = useContext(StateContext);
  let numberOfLaunches = state.launches.length;

  if (numberOfLaunches === 0) {
    return (
      <CenterContainer>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <StatusText style={{ color: 'red' }}>NO</StatusText>
        <SubtitleText>There are no launches scheduled for today.</SubtitleText>
      </CenterContainer>
    );
  }

  return (
    <CenterContainer>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <StatusText style={{ color: '#5cb85c' }}>YES</StatusText>
      <SubtitleText
        onPress={() =>
          Linking.openURL('https://thespacedevs.com/networkusers')
        }>
        {numberOfLaunches === 1
          ? 'There is one launch scheduled for today.'
          : `There are ${converter.toWords(
              numberOfLaunches,
            )} launches scheduled for today.`}
      </SubtitleText>
    </CenterContainer>
  );
};
