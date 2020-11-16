import React, { useContext } from 'react';

import { StateContext } from '../AppContext';
import { StatusText, SubtitleText } from './StyledComponents';
import SingleLaunch from './SingleLaunch';
import MultiLaunch from './MultiLaunch';

export default () => {
  const state = useContext(StateContext);
  let numberOfLaunchesToday = state.launchesToday.length;

  if (numberOfLaunchesToday === 0) {
    return (
      <>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <StatusText style={{ color: 'red' }}>NO</StatusText>
        <SubtitleText>There are no launches scheduled for today.</SubtitleText>
      </>
    );
  }

  return (
    <>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <StatusText style={{ color: '#5cb85c' }}>YES</StatusText>
      {numberOfLaunchesToday === 1 ? (
        <SingleLaunch />
      ) : (
        <MultiLaunch numberOfLaunches={numberOfLaunchesToday} />
      )}
    </>
  );
};
