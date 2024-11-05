import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {PaperProvider} from 'react-native-paper';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Toast from 'react-native-toast-message';

import {persistor, store} from '@Store/index';
import {APP_THEME} from '@Theme/AppTheme';
import {AppInitContainer} from 'AppInitContainer.tsx';
import TOAST_CONFIG from '@Utils/ToastConfig';
import '@Translations/index';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={APP_THEME}>
          <QueryClientProvider client={queryClient}>
            <BottomSheetModalProvider>
              <AppInitContainer />
              <Toast config={TOAST_CONFIG} />
            </BottomSheetModalProvider>
          </QueryClientProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
