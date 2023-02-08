import axios from 'axios';

const baseURL = 'http://appdev.volpegroup.com:8084';
export default axios.create({
  baseURL,
  // withCredentials: true,
});
