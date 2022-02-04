import axios from 'axios';

const api = axios.create({
  baseURL: 'https://landz-admin.herokuapp.com',
  headers: { accessToken: `${localStorage.getItem('accessToken')}` },
});

export default api;