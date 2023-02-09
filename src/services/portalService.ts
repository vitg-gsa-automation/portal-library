import axios from 'axios';

const baseURL = 'http://localhost:8081';
export const portalService = axios.create({
  baseURL,
  // withCredentials: true,
});
