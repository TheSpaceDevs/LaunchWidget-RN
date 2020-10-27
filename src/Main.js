import React from 'react';
import * as Sentry from '@sentry/react-native';

import App from './App';
import AppContext from './AppContext';

Sentry.init({
  dsn:
    'https://f9569860f6d34873bee6d5222f4c665e@o167118.ingest.sentry.io/5494832',
});

const Main = () => {
  return (
    <AppContext>
      <App />
    </AppContext>
  );
};

export default Main;
