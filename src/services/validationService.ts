import axios from 'axios';

const baseURL = 'http://localhost:8082';
export default axios.create({
  baseURL,
  // withCredentials: true,
});
