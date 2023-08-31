import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from 'api';
import styled from 'styled-components';

import {
  Description,
  Button,
  MovieDetailsTittle,
  MovieDetailsText,
  MovieDetailsSubTittle,
  MovieDetailsDesc,
  MovieDetailsPageSubTittle,
  InfoList,
} from './MovieDetails.styled';
import { LoadingText } from 'components/Layout/Layout.styled';

const StyledLinkInfo = styled(Link)`
  color: #ff0281;
  text-decoration: none;
  font-size: 24px;

  &.active {
    color: #c816e0;
    font-weight: 500;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(({ data }) => setMovieDetails(data))
      .catch(error => setError(error));
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <Button to={backLinkLocationRef.current}>Go back</Button>
      {error && <p>{error.message}</p>}
      {movieDetails && (
        <Description>
          <div>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : defaultImg
              }
              width="200px"
              alt={movieDetails.title}
            />
          </div>
          <div>
            <MovieDetailsTittle>
              {movieDetails.title}
              {' ('}
              {movieDetails.release_date &&
                movieDetails.release_date.slice(0, 4)}
              {')'}
            </MovieDetailsTittle>
            <MovieDetailsText>
              User score: {Math.round(movieDetails.vote_average * 10)}%
            </MovieDetailsText>
            <MovieDetailsSubTittle>Overview</MovieDetailsSubTittle>
            <MovieDetailsDesc>{movieDetails.overview}</MovieDetailsDesc>
            <MovieDetailsSubTittle>Genres</MovieDetailsSubTittle>
            <MovieDetailsDesc>
              {movieDetails.genres &&
                movieDetails.genres.map(i => i.name + ' ')}
            </MovieDetailsDesc>
          </div>
        </Description>
      )}
      <MovieDetailsPageSubTittle>
        Additional information
      </MovieDetailsPageSubTittle>
      <InfoList>
        <li>
          <StyledLinkInfo to="cast">Cast</StyledLinkInfo>
        </li>
        <li>
          <StyledLinkInfo to="reviews">Reviews</StyledLinkInfo>
        </li>
      </InfoList>
      <Suspense fallback={<LoadingText>Loading...</LoadingText>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
