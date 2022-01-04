import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeBaseProvider} from 'native-base';
import MainRouter from './src/routers/Main';

import Store from './src/redux/store';
Store.configure();
export const {store, persistor} = Store;

class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <NativeBaseProvider>
          <PersistGate loading={null} persistor={persistor}>
            <MainRouter />
          </PersistGate>
        </NativeBaseProvider>
      </Provider>
    );
  }
}

export default App;
