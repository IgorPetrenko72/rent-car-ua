import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6509d1e9f6553137159c1555.mockapi.io';

export const fetchRent = createAsyncThunk('rent/fetchAll', async page => {
  const response = await axios.get('/rent', {
    params: { page: page, limit: 8 },
  });
  return response.data;
});