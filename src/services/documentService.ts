import axios from 'axios';

const baseURL = 'http://localhost:8083';
export default axios.create({
  baseURL,
  // withCredentials: true,
});
