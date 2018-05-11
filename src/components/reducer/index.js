import { TOGGLE_RESPONSIVENESS } from '../actions';

const defaultState = {
  isMobile: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_RESPONSIVENESS:
      return Object.assign({}, state, action.payload);
  }

  return state;
};