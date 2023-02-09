import axios from 'axios';

const baseURL = 'http://localhost:8080';
export const authService = axios.create({
  baseURL,
  // withCredentials: true,
});
