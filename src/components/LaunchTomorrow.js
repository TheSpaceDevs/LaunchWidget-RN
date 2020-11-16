import React, { useContext } from 'react';
import { Text } from 'react-native';

import { SubtitleText } from './StyledComponents';
import { StateContext } from '../AppContext';
import SingleLaunch from './SingleLaunch';
import MultiLaunch from './MultiLaunch';

export default () => {
  const state = useContext(StateContext);
  let numberOfLaunchesTomorrow = state.launchesTomorrow.length;
  let numberOfLaunchesToday = state.launchesToday.length;

  const breakText = () => {
    if (
      (numberOfLaunchesToday === 0 && numberOfLaunchesTomorrow === 0) ||
      (numberOfLaunchesToday === 1 && numberOfLaunchesTomorrow === 0) ||
      (numberOfLaunchesToday === 1 && numberOfLaunchesTomorrow === 1)
    ) {
      return 'also';
    }

    if (numberOfLaunchesToday === 0 && numberOfLaunchesTomorrow === 1) {
      return 'however';
    }
  };

  if (numberOfLaunchesTomorrow === 0) {
    return (
      <>
        <Text>{breakText()}</Text>
        <SubtitleText>
          There are no launches scheduled for tomorrow.
        </SubtitleText>
      </>
    );
  }

  return (
    <>
      <Text>{breakText()}</Text>
      {numberOfLaunchesTomorrow === 1 ? (
        <SingleLaunch tomorrow={true} />
      ) : (
        <MultiLaunch
          tomorrow={true}
          numberOfLaunches={numberOfLaunchesTomorrow}
        />
      )}
    </>
  );
};
