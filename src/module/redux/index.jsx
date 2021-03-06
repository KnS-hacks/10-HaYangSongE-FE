import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session';
import user from './user';
import profile from './profile';
import reservation from './reservation';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['user', 'profile'],
};

const rootReducer = combineReducers({
  user,
  profile,
  reservation,
});

export default persistReducer(persistConfig, rootReducer);
