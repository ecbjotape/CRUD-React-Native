import {AnyAction, Store} from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {Persistor} from 'redux-persist/es/types';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from '../reducers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let module: any;

class MyStore {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store!: Store<any, AnyAction>;

  persistor!: Persistor;

  configure() {
    const persistConfig = {
      key: 'root',
      storage: AsyncStorage,
    };

    const persistedReducer = persistReducer(persistConfig, reducers());

    this.store = configureStore({
      reducer: persistedReducer,
      middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    });

    this.persistor = persistStore(this.store);

    if (module.hot) {
      module.hot.accept('../reducers/index', () => {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        const nextRootReducer = require('../reducers/index');
        this.store?.replaceReducer(nextRootReducer);
      });
    }
  }
}

export default new MyStore();
