import React from 'react';

import { LinkText, SubtitleText } from './StyledComponents';
import { Linking } from 'react-native';

const SingleLaunch = () => {
  return (
    <SubtitleText>
      <SubtitleText>There is </SubtitleText>
      <LinkText onPress={() => Linking.openURL('https://thespacedevs.com/')}>
        one{' '}
      </LinkText>
      <SubtitleText>launch scheduled for today.</SubtitleText>
    </SubtitleText>
  );
};

export default SingleLaunch;
