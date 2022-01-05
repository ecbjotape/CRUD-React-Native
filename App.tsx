import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import MainRouter from './src/routers/Main';
import { NativeBaseProvider } from 'native-base/';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';

Store.configure();
export const { store } = Store;

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NativeBaseProvider>
      <Provider store={Store.store}>
        <PersistGate loading={null} persistor={Store.persistor}>
          <StatusBar backgroundColor="#181414" />
          <MainRouter />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
