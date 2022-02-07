import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session';

import user from './user';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user,
});

export default persistReducer(persistConfig, rootReducer);
