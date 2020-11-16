import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { lightTheme, darkTheme } from './constants';

export const StateContext = createContext();

const AppContext = ({ children }) => {
  const [launchesToday, setLaunchesToday] = useState(null);
  const [launchesTomorrow, setLaunchesTomorrow] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  const initialDarkMode = async (mode) => {
    setDarkMode(mode);
  };

  const changeDarkMode = async (mode) => {
    setDarkMode(mode);
    await AsyncStorage.setItem('@LW-darkMode', JSON.stringify(mode));

    if (mode) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  const state = {
    // Launches
    launchesToday,
    setLaunchesToday,

    launchesTomorrow,
    setLaunchesTomorrow,

    // Dark Mode
    darkMode,
    initialDarkMode,
    changeDarkMode,

    // Theme stuff
    theme,
    setTheme,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default AppContext;
