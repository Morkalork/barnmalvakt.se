const getLanguageFromNavigator = () => {
  const language = (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage;

  return language.split(/[-_]/)[0];
};

export default function() {
  return window.localStorage.getItem('bm-lang') || // Check the URL
    getLanguageFromNavigator() || // Check the browser settings
    'sv'; // F*ck it, Swedish is the future lingua franca anyway!
};