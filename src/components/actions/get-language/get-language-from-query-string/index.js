import queryString from 'query-string';

export default () => {
  const params = queryString.parse(window.location.search);
  console.log({ params });

  if (params && params.lang) {
    return params.lang;
  }

  return false;
};