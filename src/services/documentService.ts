import axios from 'axios';

const baseURL = 'http://localhost:8083';
export const documentService = axios.create({
  baseURL,
  // withCredentials: true,
});
