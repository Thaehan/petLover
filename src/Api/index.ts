import axios from 'axios';

export const DOMAIN = process.env.API_URL;

const axiosInstance = axios.create({
  baseURL: DOMAIN,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = 'your_token_here';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, please login again.');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
