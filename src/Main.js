import React from 'react';

import App from './App';
import AppContext from './AppContext';

const Main = () => {
  return (
    <AppContext>
      <App />
    </AppContext>
  );
};

export default Main;
