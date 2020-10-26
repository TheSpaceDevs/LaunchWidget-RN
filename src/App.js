import React, { useEffect, useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Roboto_900Black,
  Roboto_100Thin,
} from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components';

import { LaunchText, CenterContainer, CreditsText } from './components';
import { launchesToday } from './services';
import { StateContext } from './AppContext';
import { lightTheme, darkTheme } from './constants';

export default function App() {
  const [theme, setTheme] = useState(lightTheme);
  const state = useContext(StateContext);
  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_100Thin,
  });

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      state.setLaunches(await launchesToday());
      await SplashScreen.hideAsync();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const darkMode = JSON.parse(await AsyncStorage.getItem('@LW-darkMode'));
      if (darkMode) {
        await state.changeDarkMode(darkMode);
      } else {
        // Primarily to catch the null value. This happens when darkMode isn't set (yet).
        await state.changeDarkMode(darkMode);
      }
    })();
  }, [state.darkMode]);

  if (!fontsLoaded || state.launches === null) {
    return null;
  }

  return (
    <ThemeProvider theme={state.theme}>
      <CenterContainer>
        <TouchableOpacity
          onPress={async () => {
            if (state.darkMode) {
              await state.changeDarkMode(false);
            } else {
              await state.changeDarkMode(true);
            }
          }}>
          <Icon style={{ marginTop: 5 }} name="theme-light-dark" size={30} />
        </TouchableOpacity>
        <LaunchText />
        <CreditsText>
          A project by @TheSpaceDevs and @GeoffdBarrett.
        </CreditsText>
      </CenterContainer>
    </ThemeProvider>
  );
}
