import getLanguage from '../';
import getLanguageFromNavigator from '../get-language-from-navigator';

jest.mock('../get-language-from-navigator');

afterEach(() => {
  jest.resetAllMocks();
});

describe('getLanguage', () => {
  it('Should use localStorage if applicable', () => {
    const lang = 'ru';
    global.localStorage = {
      getItem: () => lang
    };

    const result = getLanguage();
    expect(result).toBe(lang);
  });

  it('Should use navigator if localStorage is not available', () => {
    const lang = 'ru';
    global.localStorage = {
      getItem: () => null
    };

    getLanguageFromNavigator.mockReturnValue(lang);
    const result = getLanguage();
    expect(result).toBe(lang);
    expect(getLanguageFromNavigator).toHaveBeenCalledTimes(1);
  });

  it('Should default to Swedish if nothing else is available', () => {
    const lang = 'sv';
    global.localStorage = {
      getItem: () => null
    };

    getLanguageFromNavigator.mockReturnValue(null);
    const result = getLanguage();
    expect(result).toBe(lang);
    expect(getLanguageFromNavigator).toHaveBeenCalledTimes(1);
  });
});