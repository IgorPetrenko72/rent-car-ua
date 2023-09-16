import axios from 'axios';

export const getMovieCredits = async movieId => {
  const config = {
    url: `/movie/${movieId}/credits`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '392308b47edcb50c16f9f7b8df97d69f',
    },
  };

  const response = await axios(config);
  return response.data.cast;
};