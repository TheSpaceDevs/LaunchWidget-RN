import { useContext } from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { ThemeContext } from 'styled-components';

import { StateContext } from '../AppContext';

export const ThemedNavigationBar = () => {
  const state = useContext(StateContext);
  const themeContext = useContext(ThemeContext);

  // We use !state.darkMode because we want the opposite mode for the navBar icons
  changeNavigationBarColor(themeContext.mainBg, !state.darkMode, false);
  return null;
};
