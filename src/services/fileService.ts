import axios from 'axios';

const baseURL = 'http://appdev.volpegroup.com:8089';
export const fileService = axios.create({
  baseURL,
  // withCredentials: true,
});
