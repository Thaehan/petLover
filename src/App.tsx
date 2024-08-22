/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {Home} from '@Screens/Home/Home';
import {persistor, store} from '@Store/index';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
