import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StateContext = createContext();

const AppContext = ({ children }) => {
  const [launches, setLaunches] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const initialDarkMode = async (mode) => {
    setDarkMode(JSON.parse(mode));
  };

  const changeDarkMode = async () => {
    setDarkMode(!darkMode);
    await AsyncStorage.setItem('@LW-darkMode', JSON.stringify(!darkMode));
  };

  const state = {
    launches,
    setLaunches,

    // Dark Mode
    darkMode,
    initialDarkMode,
    changeDarkMode,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default AppContext;
