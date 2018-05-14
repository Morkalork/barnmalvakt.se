import getLanguage from './get-language';

export const TOGGLE_RESPONSIVENESS = 'TOGGLE_RESPONSIVENESS';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const LOAD_LANGUAGE = 'LOAD_LANGUAGE';

export const toggleResponsiveness = (isMobile) => {
  return {
    type: TOGGLE_RESPONSIVENESS,
    payload: {
      isMobile
    }
  };
};

export const setLanguage = (newLanguage) => {
  window.localStorage.setItem('lang', newLanguage); // Non-async (sync) (phew, this was a pointless comment...)

  return {
    type: SET_LANGUAGE,
    payload: {
      lang: newLanguage
    }
  };
};

export const loadLanguage = () => {
  return {
    type: LOAD_LANGUAGE,
    payload: {
      lang: getLanguage()
    }
  };
};