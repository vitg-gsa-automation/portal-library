import axios from 'axios';

const baseURL = 'http://localhost:8087';
export default axios.create({
  baseURL,
  // withCredentials: true,
});
