import { combineReducers } from 'redux';
import cardsReduser from './cardsReduser.js';
import modalReduser from './modalReduser.js';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cards: cardsReduser,
  modal: modalReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
