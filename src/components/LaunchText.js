import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import PropTypes from 'prop-types';
import converter from 'number-to-words';

export const LaunchText = ({ launches }) => {
  let numberOfLaunches = launches.length;

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
          ? "There's one launch scheduled for today."
          : `There are ${converter.toWords(
              numberOfLaunches,
            )} launches scheduled for today.`}
      </Text>
    </View>
  );
};

LaunchText.propTypes = {
  launches: PropTypes.instanceOf(Array).isRequired,
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
