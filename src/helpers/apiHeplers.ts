import { appConstants } from './appConstants';

const apiBaseUrl = appConstants.baseURL;

export const getRequest = async (endpoint: string, params: any) => {
  let queryString = '';
  if (params) {
    queryString = prepareQueryString(params);
  }
  return makeRequest(`${apiBaseUrl}
  ${endpoint}?api_key=${appConstants.apiKey}
  &${queryString}`,  'GET');
};

const makeRequest = (endpoint: string, verb: string) => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const requestOptions = {
    method: verb,
    headers,
  };

  return fetch(endpoint, requestOptions)
    .then(handleResponse)
    .then((response) => {
      return response;
    }).catch((error) => {
      throw error;
    });
};

const handleResponse = (response: any) => {
  if (response.status !== 200) {
    return Promise.reject(response.statusText);
  }
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text);
    return data;
  });
};

const prepareQueryString = (params: any): string => {
  const keys = Object.keys(params);
  let queries = keys.map((key) => {
    return params[key] && params[key].toString().length
      ? `${key}=${params[key]}` : '';
  });
  queries = queries.filter(query => query.length > 0);
  return queries.join('&');
};
