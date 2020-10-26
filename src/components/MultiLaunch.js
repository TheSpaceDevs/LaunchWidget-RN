import React from 'react';
import { Linking } from 'react-native';
import converter from 'number-to-words';

import { LinkText, SubtitleText } from './StyledComponents';

const MultiLaunch = ({ numberOfLaunches }) => {
  return (
    <SubtitleText>
      <SubtitleText>There are </SubtitleText>
      <LinkText onPress={() => Linking.openURL('https://thespacedevs.com/')}>
        {converter.toWords(numberOfLaunches)}{' '}
      </LinkText>
      <SubtitleText>launches scheduled for today.</SubtitleText>
    </SubtitleText>
  );
};

export default MultiLaunch;
