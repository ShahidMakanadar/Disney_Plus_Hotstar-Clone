import axios from "axios";

const baseUrl = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;

const getTrendingVideos = axios.get(`${baseUrl}/trending/all/day?api_key=${api_key}`);

const genreBaseUrl = import.meta.env.VITE_MOVIE_GENRE_BASE_URL;
const getMovieByGenreId=(id)=>
    axios.get(genreBaseUrl+"&with_genres="+id)

export default {
  getTrendingVideos,
  getMovieByGenreId
};