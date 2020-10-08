import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { LaunchText } from './components';
import { launchesToday } from './services';

export default function App() {
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    (async () => {
      setLaunches(await launchesToday());
    })();
  }, []);

  if (launches === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LaunchText launches={launches} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
