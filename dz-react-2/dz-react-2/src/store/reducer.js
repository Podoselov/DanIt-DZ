import { combineReducers } from 'redux';
import cardsReduser from './cardsReduser.js';
import modalReduser from './modalReduser.js';

export default combineReducers({
  cards: cardsReduser,
  modal: modalReduser,
});
