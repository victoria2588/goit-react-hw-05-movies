import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'api';
import { PageTitle, HomeListMovies } from './Home.styled.jsx';

const Home = () => {
  const [listMovies, setListMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
      .then(({ data }) => setListMovies(data.results))
      .catch(error => setError(error));
  }, []);

  return (
    <div>
      <PageTitle>Trending today</PageTitle>
      <HomeListMovies>
        {error && <p>{error.message}</p>}
        {listMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </HomeListMovies>
    </div>
  );
};

export default Home;
