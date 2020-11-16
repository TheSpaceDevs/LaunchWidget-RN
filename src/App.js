import React, { useEffect, useContext, useState } from 'react';
import { Linking, Appearance } from 'react-native';
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
  ThemedStatusBar,
  ThemedNavigationBar,
  DarkModeSwitch,
} from './components';
import { launchesToday, launchesTomorrow } from './services';
import { StateContext } from './AppContext';

export default function App() {
  const [launchesLoaded, setLaunchesLoaded] = useState(false);
  const state = useContext(StateContext);
  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_100Thin,
  });

  // Load the launches into memory, while showing the splashscreen
  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      state.setLaunchesToday(await launchesToday());
      state.setLaunchesTomorrow(await launchesTomorrow());
      setLaunchesLoaded(true);
      await SplashScreen.hideAsync();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Determine the dark mode state
  useEffect(() => {
    (async () => {
      // Check if user manually set the dark mode option
      const manualMode = JSON.parse(
        await AsyncStorage.getItem('@LW-manualMode'),
      );

      // Set the preferred dark mode setting
      if (manualMode) {
        const darkMode = JSON.parse(await AsyncStorage.getItem('@LW-darkMode'));
        if (darkMode) {
          await state.changeDarkMode(darkMode);
        }
      } else {
        // Detecting device mode and set accordingly
        let deviceMode = Appearance.getColorScheme();
        if (deviceMode === 'dark') {
          await state.changeDarkMode(true);
        } else {
          await state.changeDarkMode(false);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.darkMode]);

  // If loading of the assets is not completed yet, we don't want to return anything
  // Users see the splashscreen anyway
  if (!fontsLoaded || !launchesLoaded) {
    return null;
  }

  // Finally, if everything is set-up, we return the app components
  return (
    <ThemeProvider theme={state.theme}>
      <ThemedStatusBar />
      <CenterContainer>
        <DarkModeSwitch
          value={state.darkMode}
          onValueChange={async (value) => {
            await AsyncStorage.setItem('@LW-manualMode', JSON.stringify(true));
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
      <ThemedNavigationBar />
    </ThemeProvider>
  );
}
