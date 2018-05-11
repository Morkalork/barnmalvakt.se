export const TOGGLE_RESPONSIVENESS = 'TOGGLE_RESPONSIVENESS';

export const toggleResponsiveness = (isMobile) => {
  return {
    type: TOGGLE_RESPONSIVENESS,
    payload: {
      isMobile
    }
  };
};