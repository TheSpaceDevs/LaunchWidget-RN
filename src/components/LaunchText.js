import React, { useContext } from 'react';

import { StateContext } from '../AppContext';
import { StatusText, SubtitleText, CenterContainer } from './StyledComponents';
import SingleLaunch from './SingleLaunch';
import MultiLaunch from './MultiLaunch';

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
      {numberOfLaunches === 1 ? (
        <SingleLaunch />
      ) : (
        <MultiLaunch numberOfLaunches={numberOfLaunches} />
      )}
    </CenterContainer>
  );
};
