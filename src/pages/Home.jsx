import React, { useState, useEffect } from 'react';
import { TrendMovieTitle } from './Home.styled';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { fetchTrendMovies } from 'ServiceAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      fetchTrendMovies().then(res => setMovies(res));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <TrendMovieTitle>Trending today</TrendMovieTitle>
      <TrendingMoviesList movies={movies}></TrendingMoviesList>
    </main>
  );
};

export default Home;
