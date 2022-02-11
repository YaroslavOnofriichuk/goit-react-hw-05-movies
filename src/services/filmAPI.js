import axios from "axios";

const KEY = "bd2237a2249115d1088721da42e7aceb";
const baseURL = "https://api.themoviedb.org/3/";

export const fetchPopularFilms = async () => {
    try {
        const response = await axios.get(`${baseURL}trending/movie/day?api_key=${KEY}`);
        return response.data.results;
      } catch (error) {
        console.error(error);
      }
};

export const fetchFilmDetails = async (filmId) => {
    try {
      const response = await axios.get(`${baseURL}movie/${filmId}?api_key=${KEY}&language=en-US`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
};

export const fetchFilmByName = async (filmName) => {
  try {
    const response = await axios.get(`${baseURL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${filmName}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchFilmCast = async (filmId) => {
  try {
    const response = await axios.get(`${baseURL}movie/${filmId}/credits?api_key=${KEY}&language=en-US`);
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const fetchFilmReviews = async (filmId) => {
  try {
    const response = await axios.get(`${baseURL}movie/${filmId}/reviews?api_key=${KEY}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};