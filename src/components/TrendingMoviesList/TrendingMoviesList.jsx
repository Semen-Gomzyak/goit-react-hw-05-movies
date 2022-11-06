import { useLocation } from 'react-router-dom';
import {
  TrendMovieLink,
  TrendMovieList,
  TrendMovieItem,
} from './TrendingMoviesList.styled';

export const TrendingMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <TrendMovieList>
      {movies.length > 0 &&
        movies.map(movie => (
          <TrendMovieItem key={movie.id}>
            <TrendMovieLink
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title ? movie.title : movie.name}
            </TrendMovieLink>
          </TrendMovieItem>
        ))}
    </TrendMovieList>
  );
};
