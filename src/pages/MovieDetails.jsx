import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { MovieInformation } from 'components/MovieInformation/MovieInformation';
import { BackLink } from 'components/BackLink/BackLink';
import { FetchMovieInformationById } from 'ServiceAPI';

const MoviesDetails = () => {
  const [movieInformation, setMovieInformation] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { poster_path, title, name, vote_average, overview, genres } =
    movieInformation;

  useEffect(() => {
    try {
      FetchMovieInformationById(id).then(res => setMovieInformation(res));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieInformation
        poster_path={poster_path}
        title={title}
        name={name}
        vote_average={vote_average}
        overview={overview}
        genres={genres}
        backLink={backLinkHref}
      ></MovieInformation>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
