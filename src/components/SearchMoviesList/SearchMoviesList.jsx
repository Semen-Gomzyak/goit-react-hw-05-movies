import { useLocation } from 'react-router-dom';
import {
  SearchMovieLink,
  SearchMovieList,
  SearchMovieItem,
} from './SearchMoviesList.styled';

export const SearchMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <SearchMovieList>
      {movies.length > 0 &&
        movies.map(movie => (
          <SearchMovieItem key={movie.id}>
            <SearchMovieLink to={`${movie.id}`} state={{ from: location }}>
              {movie.title ? movie.title : movie.name}
            </SearchMovieLink>
          </SearchMovieItem>
        ))}
    </SearchMovieList>
  );
};
