import { AnyAction, Store } from 'redux';
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
import { Persistor } from 'redux-persist/es/types';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from '../reducers';

declare let module: any;

class MyStore {
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
        const nextRootReducer = require('../reducers/index');
        this.store?.replaceReducer(nextRootReducer);
      });
    }
  }
}

export default new MyStore();
