import {
  CARDS,
  DELETE_BYU_CARD,
  BUY,
  STARS_COLOR_ADD,
  STARS_COLOR_REMOVE,
} from './actionsType';

const defaultState = {
  all: [],
};

export default function cardsReduser(state = defaultState, action) {
  switch (action.type) {
    case CARDS:
      return { ...state, all: action.payload };
    case STARS_COLOR_ADD:
      return {
        ...state,
        all: state.all.map((element) => {
          return element.idProduct === action.payload
            ? { ...element, favorites: true }
            : element;
        }),
      };
    case STARS_COLOR_REMOVE:
      return {
        ...state,
        all: state.all.map((element) => {
          return element.idProduct === action.payload
            ? { ...element, favorites: false }
            : element;
        }),
      };
    case BUY:
      return {
        ...state,
        all: state.all.map((element) =>
          element.idProduct === action.payload
            ? { ...element, buy: true }
            : element
        ),
      };
    case DELETE_BYU_CARD:
      return {
        ...state,
        all: state.all.map((element) =>
          element.idProduct === action.payload
            ? { ...element, buy: false }
            : element
        ),
      };
    default:
      return state;
  }
}
