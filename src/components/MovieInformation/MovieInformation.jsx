import imageDefaults from 'images/broken-img.jpg';
import {
  MovieInformationSection,
  MovieInformationImage,
  MovieInformationWrapper,
  MovieInformationTitle,
  MovieInformationText,
  MovieInformationSectionTitle,
  MovieInformationComponentsLink,
  MovieInformationComponentsList,
  MovieInformationComponentsItem,
  MovieInformationComponentsWrapper,
  MovieInformationGenresWrapper,
} from './MovieInformation.styled';

export const MovieInformation = ({
  poster_path,
  title,
  name,
  vote_average,
  overview,
  genres,
  backLink,
}) => {
  return (
    <main>
      <MovieInformationSection>
        <MovieInformationImage
          src={`${
            poster_path
              ? `https://image.tmdb.org/t/p/w400${poster_path}`
              : imageDefaults
          }`}
          alt={`Foto ${title ? title : name}`}
        />
        <MovieInformationWrapper>
          <MovieInformationTitle>{title ? title : name}</MovieInformationTitle>
          <MovieInformationText>
            User Score: {((vote_average / 10) * 100).toFixed(0)}%
          </MovieInformationText>
          <MovieInformationSectionTitle>Overview</MovieInformationSectionTitle>
          <MovieInformationText>{overview}</MovieInformationText>
          <MovieInformationSectionTitle>Genres</MovieInformationSectionTitle>
          <MovieInformationGenresWrapper>
            {genres &&
              genres.map(genre => (
                <li key={genre.id}>
                  <MovieInformationText>{genre.name}</MovieInformationText>
                </li>
              ))}
          </MovieInformationGenresWrapper>
        </MovieInformationWrapper>
      </MovieInformationSection>

      <MovieInformationComponentsWrapper>
        <MovieInformationText>Additional information</MovieInformationText>

        <MovieInformationComponentsList>
          <MovieInformationComponentsItem>
            <MovieInformationComponentsLink
              to="cast"
              state={{ from: backLink }}
            >
              Cast
            </MovieInformationComponentsLink>
          </MovieInformationComponentsItem>
          <MovieInformationComponentsItem>
            <MovieInformationComponentsLink
              to="reviews"
              state={{ from: backLink }}
            >
              Reviews
            </MovieInformationComponentsLink>
          </MovieInformationComponentsItem>
        </MovieInformationComponentsList>
      </MovieInformationComponentsWrapper>
    </main>
  );
};
