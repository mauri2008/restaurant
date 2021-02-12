import axios from 'axios';

const USE_TOKEN = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {'Authorization': `Bearer ${USE_TOKEN}`}
})

export default api;