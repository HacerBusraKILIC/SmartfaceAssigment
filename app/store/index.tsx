// Modules
import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Reducers && State Interfaces
import userReducer from '../modules/user/reducers';

const rootReducer = combineReducers({
  user: userReducer,
});
// Redux Persist
const persistConfig = {
  key: '@Smartface',
  storage: AsyncStorage,
  whiteList: ['user'],
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Store && Persistor
export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
