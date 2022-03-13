import { MODAL_OPEN } from './actionsType';

const defaultState = {
  stateModal: false,
};

export default function modalReduser(state = defaultState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        stateModal: action.payload,
      };
    default:
      return state;
  }
}
