import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import apiInstance from '../../../api/apiInstance';
import { Text, Image } from '@chakra-ui/react';

// client side rendering
export default function Movie() {
  const [movieDetail, setMovieDetail] = useState({});
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    apiInstance
      .get(`/Title/k_4rgq7u85/${router.query.movie}`)
      .then((response) => {
        if (response.data) {
          setMovieDetail(response.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(movieDetail);
  return (
    <div>
      <Text>{movieDetail.fullTitle}</Text>
      <Image
        max-height={'100%'}
        max-width={'100%'}
        h={{ base: '100%', sm: '400px', lg: '500px' }}
        src={movieDetail.image}
      />
      <Text>
        Release Date: <Text>{movieDetail.releaseDate}.</Text>
      </Text>
      <Text>
        Story: <Text>{movieDetail.plot}</Text>
      </Text>
      <Text>
        Awards: <Text>{movieDetail.awards}.</Text>
      </Text>
      <Text>
        Movie Genres: <Text>{movieDetail.genres}.</Text>
      </Text>
      <Text>
        IMDB Rating: <Text>{movieDetail.imDbRating}/10.</Text>
      </Text>
      <Text>
        IMDB No. of Votes:{' '}
        <Text>{movieDetail.imDbRatingVotes} votes.</Text>
      </Text>
    </div>
  );
}
