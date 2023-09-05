import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'api';
import { ListActors, ItemActors, TextActors, ImgActors } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actorList, setActorList] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    axios
      .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(({ data }) => setActorList(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <ListActors>
        {actorList.map(actor => (
          <ItemActors key={actor.id}>
            <ImgActors
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
            />
            <TextActors>{actor.name}</TextActors>
            <TextActors>{actor.character}</TextActors>
          </ItemActors>
        ))}
      </ListActors>
    </>
  );
};

export default Cast;

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { BASE_URL, API_KEY } from 'api';
// import { ListActors } from './Cast.styled';

// const Cast = () => {
//   const { movieId } = useParams();
//   const [actorList, setActorList] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
//       .then(({ data }) => setActorList(data.cast))
//       .catch(error => console.log(error));
//   }, [movieId]);

//   return (
//     <>
//       <ListActors>
//         {actorList.map(actor => (
//           <li key={actor.id}>
//             {actor.profile_path && (
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
//                 alt={actor.name}
//                 width="100px"
//               />
//             )}
//             <p>{actor.name}</p>
//             <p>Character: {actor.character}</p>
//           </li>
//         ))}
//       </ListActors>
//     </>
//   );
// };

// export default Cast;
