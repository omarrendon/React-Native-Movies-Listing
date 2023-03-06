import axios from 'axios';

const api_key = '305bef6c96aa7cb1b78b18a29683545f';

const moviesDB = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
  params: {
    api_key,
    languaje: 'es-ES',
  },
});

export default moviesDB;
