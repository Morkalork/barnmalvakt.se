import getLanguageFromNavigator from './get-language-from-navigator';

export default function() {
  return (window.localStorage && window.localStorage.getItem('bm-lang')) || // Check the URL
    getLanguageFromNavigator() || // Check the browser settings
    'sv'; // F*ck it, Swedish is the future lingua franca anyway!
};