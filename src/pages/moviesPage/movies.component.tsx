import { Button, Input, theme } from '@chakra-ui/react';
import { useState } from 'react';

import CardComponent from '../../components/cards/card.component';
import { getImgPathUrl } from '../../services/urlsList';
import { moviesGetFunction } from './movies.service';
import { moviesPage } from './movies.type';

import './movies.style.scss';

const MoviesComponent = () => {
  const [moviesPageData, setMoviesPageData] = useState<moviesPage>();
  const [inputValue, setInputValue] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPageNumber, setTotalPageNumber] = useState<number>(1);
  const [noMovies, setNoMovies] = useState<boolean>(false);

  const getSearchedMovies = async (movieName: string, moviesPage: number) => {
    if (inputValue.length === 0) return;

    const data = await moviesGetFunction(movieName, moviesPage);
    setMoviesPageData(data?.data);
    setPageNumber(data?.data.page);
    setTotalPageNumber(data?.data.total_pages);
    setNoMovies(data?.data.results.length === 0 ? true : false);
    setInputValue('');

    console.log(inputValue, pageNumber, totalPageNumber);
  };

  return (
    <>
      <section className="movies-container">
        <form className="movies-input-container">
          <Input
            focusBorderColor={theme.colors.teal[500]}
            colorScheme="teal"
            color={theme.colors.teal[500]}
            className="movies-input"
            type="text"
            size="lg"
            placeholder="Enter your movie name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Button
            variant="solid"
            colorScheme="teal"
            size="lg"
            onClick={() => getSearchedMovies(inputValue, pageNumber)}
          >
            Search
          </Button>
        </form>

        {moviesPageData?.results!.length != undefined && moviesPageData?.results!.length > 0 && (
          <div className="movies-cards-container">
            {moviesPageData?.results.map((movie) => {
              return (
                <CardComponent
                  key={movie.id}
                  title={movie.title}
                  year={movie.release_date ? movie.release_date.slice(0, 4) : '0000'}
                  rate={movie.vote_average}
                  imageUrl={movie.poster_path != null ? getImgPathUrl + movie.poster_path : '/src/assets/no-post-img.png'}
                  alt={movie.title}
                  type="movie"
                  id={movie.id}
                />
              );
            })}
          </div>
        )}

        {noMovies && <h1 className="no-data-flag">No Movies Found</h1>}
      </section>
    </>
  );
};

export default MoviesComponent;
