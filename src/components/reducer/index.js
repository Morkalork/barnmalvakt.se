import { TOGGLE_RESPONSIVENESS, SET_LANGUAGE, LOAD_LANGUAGE } from '../actions';

const defaultState = {
  isMobile: false,
  lang: 'sv'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_RESPONSIVENESS:
    case SET_LANGUAGE:
    case LOAD_LANGUAGE:
      return Object.assign({}, state, action.payload);
  }

  return state;
};