import axios from 'axios';

const API_KEY = 'a38e951866c6673e7ba6db65eaad7ec5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const fetchSearchMovie = async querry => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${querry}&page=1&include_adult=false`
  );
  return data;
};

export const fetchMovieId = async id => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchCastMovie = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchReviewsMovie = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};