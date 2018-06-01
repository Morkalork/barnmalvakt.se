import getLanguageFromNavigator from './get-language-from-navigator';
import getLanguageFromQueryString from './get-language-from-query-string';

const validLanguages = ['en', 'sv'];

export default function () {
  const lang = (window.localStorage && window.localStorage.getItem('bm-lang')) || // Check the URL
    getLanguageFromQueryString() ||
    getLanguageFromNavigator() || // Check the browser settings
    'en';

  if (!lang || !validLanguages.includes(lang)) {
    return validLanguages[0];
  }

  return lang;
};