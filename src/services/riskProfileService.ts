import axios from 'axios';

const baseURL = 'http://localhost:8087';
export const riskProfileService = axios.create({
  baseURL,
  // withCredentials: true,
});
