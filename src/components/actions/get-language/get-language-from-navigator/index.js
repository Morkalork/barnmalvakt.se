export default () => {
  console.log('AY WAS KALD!');
  const language = (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage;

  return language.split(/[-_]/)[0];
};