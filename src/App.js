import React, { useEffect, useContext } from 'react';
import { Switch, Linking } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Roboto_900Black,
  Roboto_100Thin,
} from '@expo-google-fonts/roboto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components';

import {
  LaunchText,
  CenterContainer,
  CreditsText,
  LinkText,
} from './components';
import { launchesToday } from './services';
import { StateContext } from './AppContext';

export default function App() {
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
      }
    })();
  }, [state.darkMode]);

  if (!fontsLoaded || state.launches === null) {
    return null;
  }

  return (
    <ThemeProvider theme={state.theme}>
      <CenterContainer>
        <Switch
          style={{ alignSelf: 'flex-end' }}
          value={state.darkMode}
          onValueChange={async (value) => {
            await state.changeDarkMode(value);
          }}
        />
        <LaunchText />
        <CreditsText>
          A project by{' '}
          <LinkText
            onPress={() => Linking.openURL('https://thespacedevs.com/')}>
            @TheSpaceDevs
          </LinkText>{' '}
          and{' '}
          <LinkText onPress={() => Linking.openURL('https://gdbarrett.com/')}>
            @GeoffdBarrett
          </LinkText>
          .
        </CreditsText>
      </CenterContainer>
    </ThemeProvider>
  );
}
