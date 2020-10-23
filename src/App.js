import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LaunchText } from './components';
import { launchesToday } from './services';
import { StateContext } from './AppContext';
import { colors } from './constants';

export default function App() {
  const state = useContext(StateContext);
  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular,
  });

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      const darkMode = await AsyncStorage.getItem('@LW-darkMode');
      if (darkMode) {
        await state.initialDarkMode(darkMode);
      }
      state.setLaunches(await launchesToday());
      await SplashScreen.hideAsync();
    })();
  }, []);

  if (!fontsLoaded || state.launches === null) {
    return null;
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: state.darkMode ? colors.darkBg : colors.lightBg,
      }}>
      <TouchableOpacity
        onPress={() => {
          state.changeDarkMode();
        }}>
        <Icon style={{ marginTop: 5 }} name="theme-light-dark" size={30} />
      </TouchableOpacity>
      <LaunchText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
