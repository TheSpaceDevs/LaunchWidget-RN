import React, { useContext } from 'react';
import { Linking, StyleSheet } from 'react-native';

import { LinkText, SubtitleText } from './StyledComponents';
import { StateContext } from '../AppContext';
import { getRemainingTime } from '../services';

export default () => {
  const state = useContext(StateContext);
  let numberOfLaunchesToday = state.launchesToday.length;
  let launches = state.launches;
  let remainingDays = getRemainingTime(launches[0].window_start).days;

  // If we have a launch today, do not show the next launch
  if (numberOfLaunchesToday !== 0) {
    return null;
  }

  return (
    <>
      <SubtitleText style={styles.subtitleContainer}>
        <SubtitleText>The </SubtitleText>
        <LinkText onPress={() => Linking.openURL('https://thespacedevs.com/')}>
          next launch
        </LinkText>
        <SubtitleText>
          {' '}
          is {remainingDays === 1 ? 'tomorrow' : `in ${remainingDays} days`}
        </SubtitleText>
      </SubtitleText>
    </>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    marginTop: 50,
  },
});
