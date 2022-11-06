import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imageDefaults from 'images/broken-img.jpg';
import { FetchCastInformationById } from 'ServiceAPI';
import {
  CastSection,
  CastList,
  CastItem,
  CastImage,
  CastTitle,
  CastText,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      FetchCastInformationById(id).then(res => setCast(res));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <CastSection>
      <CastList>
        {cast.length > 0 &&
          cast.map(actor => (
            <CastItem key={actor.name}>
              <CastImage
                src={`${
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w400${actor.profile_path}`
                    : imageDefaults
                }`}
                alt={`Foto ${actor.name}`}
              />
              <CastTitle>{actor.name}</CastTitle>
              <CastText>{actor.character}</CastText>
            </CastItem>
          ))}
      </CastList>
      {!cast.length && (
        <CastText>
          We don't have any information about the cast of this movie.
        </CastText>
      )}
    </CastSection>
  );
};

export default Cast;
