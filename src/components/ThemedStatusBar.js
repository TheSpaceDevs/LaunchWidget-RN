import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components';

import { StateContext } from '../AppContext';

export const ThemedStatusBar = () => {
  const state = useContext(StateContext);
  const themeContext = useContext(ThemeContext);

  return (
    <StatusBar
      barStyle={state.darkMode ? 'light-content' : 'dark-content'}
      backgroundColor={themeContext.mainBg}
    />
  );
};
