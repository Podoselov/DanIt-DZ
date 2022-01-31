import {
  CARDS,
  DELETE_BYU_CARD,
  BUY,
  CARDS_FAVORITES,
  STARS_COLOR_ADD,
  STARS_COLOR_REMOVE,
  MODAL_OPEN,
} from './actionsType';

export function modalOpen(state) {
  return (dispatch) => {
    dispatch({
      type: MODAL_OPEN,
      payload: state,
    });
  };
}

export function getAllCards(cards) {
  return (dispatch) => {
    dispatch({
      type: CARDS,
      payload: cards,
    });
  };
}
export function getBuyCards(card) {
  return (dispatch) => {
    dispatch({
      type: BUY,
      payload: card,
    });
  };
}
export function getFavoritesCards(cards) {
  return (dispatch) => {
    dispatch({
      type: CARDS_FAVORITES,
      payload: cards,
    });
  };
}
export function deleteBuyCards(card) {
  return (dispatch) => {
    dispatch({
      type: DELETE_BYU_CARD,
      payload: card,
    });
  };
}

export function addColorStar(idProduct) {
  return (dispatch) => {
    dispatch({
      type: STARS_COLOR_ADD,
      payload: idProduct,
    });
  };
}

export function removeColorStar(idProduct) {
  return (dispatch) => {
    dispatch({
      type: STARS_COLOR_REMOVE,
      payload: idProduct,
    });
  };
}
