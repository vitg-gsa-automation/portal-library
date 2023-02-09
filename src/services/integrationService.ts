import axios from 'axios';

const baseURL = 'http://appdev.volpegroup.com:8084';
export const integrationService = axios.create({
  baseURL,
  // withCredentials: true,
});
