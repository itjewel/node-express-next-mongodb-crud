// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'your_api_base_url',
});

export const checkAuth = async (token: string) => {
  // Make an API call to check authentication status on the server
  const response = await api.post('/check-auth', { token });
  return response.data;
};
