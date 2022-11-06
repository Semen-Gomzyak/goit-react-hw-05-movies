import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
import { useEffect, useState } from 'react';
import { fetchSearchQueryMovies } from 'ServiceAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    try {
      fetchSearchQueryMovies(searchParams).then(res => setMovies([...res]));
    } catch (error) {
      console.log(error);
    }
  }, [movieName, searchParams]);

  const searchSubmitHandler = movieTitle => {
    setSearchParams({ query: movieTitle });
  };

  return (
    <main>
      <SearchBox value={movieName} onSubmit={searchSubmitHandler} />
      <SearchMoviesList movies={movies} />
    </main>
  );
};

export default Movies;
