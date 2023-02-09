import axios from 'axios';

const baseURL = 'http://localhost:8082';
export const validationService = axios.create({
  baseURL,
  // withCredentials: true,
});
