import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'api';
import { SearchButton, SearchInput, SearchList } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [listFoundMovies, setListFoundMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    query &&
      axios
        .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
        .then(({ data }) => setListFoundMovies(data.results))
        .catch(error => console.log(error));
  }, [query]);

  const handleInputChange = event =>
    setSearchQuery(event.target.value.toLowerCase());

  const handleSubmit = event => {
    event.preventDefault();
    searchQuery && setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          onChange={handleInputChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </form>
      <SearchList>
        {listFoundMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </SearchList>
    </div>
  );
};

export default Movies;

// import { BASE_URL, API_KEY } from 'api';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link, useLocation, useSearchParams } from 'react-router-dom';

// const Movies = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [listSearchMovies, setListSearchMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const location = useLocation();

//   const query = searchParams.get('query') ?? '';

//   useEffect(() => {
//     query &&
//       axios
//         .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
//         .then(({ data }) => setListSearchMovies(data.results))
//         .catch(error => console.log(error));
//   }, [query]);

//   const handleInputChange = event =>
//     setSearchQuery(event.target.value.toLowerCase());

//   const handleSubmit = event => {
//     event.preventDefault();
//     searchQuery && setSearchParams({ query: searchQuery });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={searchQuery}
//           autoComplete="off"
//           autoFocus
//           onChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {listSearchMovies.map(movie => (
//           <li key={movie.id}>
//             <Link to={`${movie.id}`} state={{ from: location }}>
//               {movie.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Movies;
