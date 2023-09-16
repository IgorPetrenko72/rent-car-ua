import axios from 'axios';

export const getMovieSearch = async params => {
  const config = {
    url: `/search/movie`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '392308b47edcb50c16f9f7b8df97d69f',
      query: params,
    },
  };

  const response = await axios(config);
  return response.data.results;
};
