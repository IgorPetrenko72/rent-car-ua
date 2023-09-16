import axios from 'axios';

const config = {
  url: '/trending/movie/week',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '392308b47edcb50c16f9f7b8df97d69f',
  },
};

export const getTrandingApi = async () => {
  const response = await axios(config);
  return response.data.results;
};

