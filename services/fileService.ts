import axios from 'axios';

const baseURL = 'http://appdev.volpegroup.com:8089';
export default axios.create({
  baseURL,
  // withCredentials: true,
});
