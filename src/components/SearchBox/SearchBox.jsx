import { useState } from 'react';
import { toast } from 'react-toastify';
import { Wrapper, Input, Button, SearchForm } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [movieTitle, setMovieTitle] = useState('');

  const handleInputChange = event => {
    const searchMovie = event.currentTarget.value;

    setMovieTitle(searchMovie);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (movieTitle.trim() === '') {
      toast.error('Enter a movie title');
      return;
    }

    onSubmit(movieTitle);
    setMovieTitle('');
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="movieTitle"
          value={movieTitle}
          onChange={handleInputChange}
        />

        <Button type="submit" className="SearchButton">
          Search
        </Button>
      </SearchForm>
    </Wrapper>
  );
};
