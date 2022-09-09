import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // used for local storage

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('Type: ', action.type);
  console.log('Payload: ', action.payload);
  console.log('CurrentState: ', store.getState());

  next(action);

  console.log('Next State: ', store.getState());
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
