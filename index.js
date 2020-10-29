import React from 'react';
import { registerRootComponent } from 'expo';
import * as Sentry from '@sentry/react-native';

import AppContext from './src/AppContext';
import App from './src/App';

// Over-engineer this app with Sentry
Sentry.init({
  dsn:
    'https://f9569860f6d34873bee6d5222f4c665e@o167118.ingest.sentry.io/5494832',
});

// Setting-up the root of the application. We wrap the App component in the AppContext, giving us app-level state.
registerRootComponent(() => {
  return (
    <AppContext>
      <App />
    </AppContext>
  );
});
