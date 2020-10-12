import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

import { LaunchText } from './components';
import { launchesToday } from './services';

export default function App() {
  const [launches, setLaunches] = useState([]);
  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular,
  });

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      setLaunches(await launchesToday());
      await SplashScreen.hideAsync();
    })();
  }, []);

  if (!fontsLoaded || launches === null) {
    return null;
  }

  return (
    <View style={styles.container}>
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
