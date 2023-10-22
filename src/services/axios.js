import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5173/src/',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  // Add authentication token to the request header
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

instance.interceptors.response.use((response) => {
  // Check the response status code and handle errors accordingly
  if (response.status !== 200) {
    // Handle error
  }

  return response;
});

export default instance;
