import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import apiInstance from '../../../api/apiInstance';
import {
  Text,
  Image,
  Container,
  SimpleGrid,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { MovieDetail } from '../../../helper/types';
import Nav from '../../../components/nav';
import { apiKey } from '../../../api/apiKey';
// client side rendering
export default function Movie(): JSX.Element {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>({
    fullTitle: '',
    image: '',
    releaseDate: '',
    plot: '',
    awards: '',
    genres: '',
    imDbRating: '',
    imDbRatingVotes: '',
  });
  const router = useRouter();
  useEffect(() => {
    apiInstance
      .get(`/Title/${apiKey}/${router.query.movie}`)
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
      <Nav />
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 1, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Stack spacing={{ base: 1, md: 4 }}>
            <Heading
              color={'red'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {movieDetail.fullTitle}
            </Heading>
            <Text fontWeight={600} color={'red'}>
              Release Date:
            </Text>
            <Text>{movieDetail.releaseDate}.</Text>
            <Text fontWeight={600} color={'red'}>
              Story:
            </Text>
            <Text>{movieDetail.plot}</Text>
            <Text fontWeight={600} color={'red'}>
              Awards:
            </Text>
            <Text>{movieDetail.awards}.</Text>
            <Text fontWeight={600} color={'red'}>
              Movie Genres:
            </Text>
            <Text>{movieDetail.genres}.</Text>
            <Text fontWeight={600} color={'red'}>
              IMDB Rating:
            </Text>
            <Text>{movieDetail.imDbRating}/10.</Text>
            <Text fontWeight={600} color={'red'}>
              IMDB No. of Votes:{' '}
            </Text>
            <Text>{movieDetail.imDbRatingVotes} votes.</Text>
          </Stack>
          <Image
            rounded={'md'}
            alt={'Movie image'}
            fit={'cover'}
            align={'center'}
            max-height={'100%'}
            max-width={'100%'}
            w={{ base: '100%', sm: '300px', lg: '400px' }}
            src={movieDetail.image}
          />
        </SimpleGrid>
      </Container>
    </div>
  );
}
