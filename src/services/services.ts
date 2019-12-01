import * as apiHelper from '../helpers/apiHeplers';
import { appConstants } from '../helpers/appConstants';

const defaultParams = {
  language: 'en-US',
  page: 1,
  include_adult: false,
};

export const fetchLatestMovies = () => {
  return apiHelper.getRequest(appConstants.endpoints.discover, {
    primary_release_year: new Date().getFullYear(),
    ...defaultParams,
  }).then((response: any) => {
    return response;
  },      (error: any) => {
    throw error;
  });
};

export const searchMovies = (query: string) => {
  return apiHelper.getRequest(appConstants.endpoints.search, {
    query, primary_release_year: new Date().getFullYear(),
    ...defaultParams,
  }).then((response: any) => {
    return response;
  },      (error: any) => {
    throw error;
  });
};

export const fetchMovieById = (id: number) => {
  const endpoint = `${appConstants.endpoints.getmoviebyid}${id}`;
  return apiHelper.getRequest(endpoint, null).then((response: any) => {
    return response;
  },                                               (error: any) => {
    throw error;
  });
};
