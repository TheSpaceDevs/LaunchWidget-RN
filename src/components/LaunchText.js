import React, { useContext } from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import converter from 'number-to-words';

import { StateContext } from '../AppContext';

export const LaunchText = () => {
  const state = useContext(StateContext);
  let numberOfLaunches = state.launches.length;

  if (numberOfLaunches === 0) {
    return (
      <View style={styles.container}>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={{ ...styles.yesNoTextStyle, color: 'red' }}>NO.</Text>
        <Text style={styles.underlineTextStyle}>
          There are no launches scheduled for today.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Text style={{ ...styles.yesNoTextStyle, color: '#3fe31b' }}>YES.</Text>
      <Text
        style={styles.underlineTextStyle}
        onPress={() =>
          Linking.openURL('https://thespacedevs.com/networkusers')
        }>
        {numberOfLaunches === 1
          ? 'There is one launch scheduled for today.'
          : `There are ${converter.toWords(
              numberOfLaunches,
            )} launches scheduled for today.`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yesNoTextStyle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  underlineTextStyle: {
    fontFamily: 'Roboto_400Regular',
  },
});
