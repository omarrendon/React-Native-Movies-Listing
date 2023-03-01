import axios from 'axios';

const storeDB = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export default storeDB;
