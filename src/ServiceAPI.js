import axios from 'axios';

export const FetchMovieInformationById = async id => {
  const respons = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US`
  );
  return respons.data;
};

export const FetchCastInformationById = async id => {
  const respons = await axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US`
  );

  return respons.data.cast;
};

export const FetchReviewInformationById = async id => {
  const respons = await axios(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US&page=1`
  );

  return respons.data.results;
};

export const fetchTrendMovies = async () => {
  const respons = await axios(
    'https://api.themoviedb.org/3/trending/all/day?api_key=bb9be7856d820d280efdc8865f07d5b2'
  );

  return respons.data.results;
};

export const fetchSearchQueryMovies= async (searchParams) => {
  const respons = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US&${searchParams}&page=1&include_adult=false`
  );

  return respons.data.results;
};