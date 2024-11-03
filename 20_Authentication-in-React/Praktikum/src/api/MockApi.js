import axios from 'axios';

const api = axios.create({
  baseURL: 'https://67272fbe302d03037e6fbc96.mockapi.io', 
});

export default api;
