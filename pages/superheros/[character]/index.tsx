import apiInstance from '../../../api/apiInstance';
import { characters } from '../../../api/characters';
import React, { useState, useEffect } from 'react';
import Nav from '../../../components/nav';
import styles from '../../../styles/Home.module.css';

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Center,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import HerosCard from '../../../components/herosCard';
import Link from 'next/link';
import SimilerMoviesCard from '../../../components/similerMoviesCard';

type Movie = {
  title: string;
  description: string;
  id: number;
  image: string;
};

type Parameters = {
  character: string;
};

export const generateRandomNumber = (
  min: number,
  max: number
): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getStaticPaths = async () => {
  const paths: object = characters.map((character) => ({
    params: { character: character.route.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: Parameters;
}) => {
  const selectedHero = characters.filter(
    (p) => p.route === params.character
  );
  let res: Array<object> = [];
  // await apiInstance
  //   .get(`/SearchTitle/k_4rgq7u85/${selectedHero[0].route}`)
  //   .then((response) => {
  //     if (response.data) {
  //       res = response.data.results;
  //       return res;
  //     }
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  return {
    props: {
      result: res,
      selectedHero: selectedHero,
    },
  };
};

export default function superHero(props: {
  result: Array<Movie>;
  selectedHero: Array<object>;
}) {
  // const [selectedMovie, setSelectedMovie] = useState<Movie>({
  //   title: '',
  //   description: '',
  //   id: 0,
  //   image: '',
  // });
  const result = [
    {
      id: 'tt11897478',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BYzhmNWMyYjQtNTVlMC00MGUwLWFmYjEtM2NkNWY0ODQ2YmFiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.7273_AL_.jpg',
      title: 'The Stranger',
      description: '(II) (2022)',
    },
    {
      id: 'tt4574334',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7727_AL_.jpg',
      title: 'Stranger Things',
      description: '(2016) (TV Series)',
    },
    {
      id: 'tt0077469',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BMGYyMTAyMWItYzRhMC00NDQ5LWIzZjItNzM2ZmZlYmU0N2E1XkEyXkFqcGdeQXVyOTA0NzE2MzA@._V1_Ratio0.7273_AL_.jpg',
      title: 'Dr. Strange',
      description: '(1978) (TV Movie)',
    },
    {
      id: 'tt10298840',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BZTk1NzQwMWQtNzVmNS00MDc4LWE1MTktMmQyYzExYWMwZDQ4XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_Ratio0.7273_AL_.jpg',
      title: 'Strange World',
      description: '(2022)',
    },
    {
      id: 'tt9698480',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BNWNlYzA2OWUtMWE1Mi00ZjMyLWExY2ItZDVlZmQ0YTMyZmEyXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_Ratio0.7273_AL_.jpg',
      title: 'The Stranger',
      description: '(I) (2020) (TV Mini Series)',
    },
    {
      id: 'tt1211837',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_Ratio0.7273_AL_.jpg',
      title: 'Doctor Strange',
      description: '(2016)',
    },
    {
      id: 'tt0482606',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTkxODAyODMwNV5BMl5BanBnXkFtZTcwNzk5Nzk2MQ@@._V1_Ratio0.7273_AL_.jpg',
      title: 'The Strangers',
      description: '(2008)',
    },
    {
      id: 'tt8760932',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BYjBkYjgxNTktZjQ0Zi00OGU5LThjOTEtOGUzMDVhNjc2MjU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg',
      title: 'Nine Perfect Strangers',
      description: '(2021) (TV Mini Series)',
    },
    {
      id: 'tt9419884',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.7273_AL_.jpg',
      title: 'Doctor Strange in the Multiverse of Madness',
      description: '(2022)',
    },
    {
      id: 'tt6461346',
      resultType: 'Title',
      image:
        'https://m.media-amazon.com/images/M/MV5BZWQ3MmFiNTctMzZkMS00NGY1LWI3ZTEtZjM4ZjJlY2VmMjY3XkEyXkFqcGdeQXVyNDU4MDQ0MjM@._V1_Ratio0.7273_AL_.jpg',
      title: 'Stranger',
      description: '(2017) (TV Series)',
    },
  ];

  const selectedMovie = {
    id: 'tt6461346',
    resultType: 'Title',
    image:
      'https://m.media-amazon.com/images/M/MV5BZWQ3MmFiNTctMzZkMS00NGY1LWI3ZTEtZjM4ZjJlY2VmMjY3XkEyXkFqcGdeQXVyNDU4MDQ0MjM@._V1_Ratio0.7273_AL_.jpg',
    title: 'Stranger',
    description: '(2017) (TV Series)',
  };

  // useEffect(() => {
  //   setSelectedMovie(
  //     props.result[generateRandomNumber(0, props.result.length - 1)]
  //   );
  // }, []);

  // const handleSelectedMovie = () =>
  //   setSelectedMovie(
  //     props.result[generateRandomNumber(0, props.result.length - 1)]
  //   );
  return (
    <div>
      <Nav />
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 1, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                alignSelf={'center'}
                justifyContent={'center'}
                max-height={'100%'}
                max-width={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              >
                <Center>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
                  >
                    For This Champion we choose:
                  </Heading>
                </Center>
                <Center>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                  >
                    {selectedMovie.title}
                  </Heading>
                </Center>
                <Center>
                  <Text>{selectedMovie.description}</Text>
                </Center>
              </Box>
            </Box>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'Movie image'}
              src={selectedMovie.image}
              fit={'cover'}
              align={'center'}
              max-height={'100%'}
              max-width={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Center>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
        >
          Similar for this Champion
        </Heading>
      </Center>
      <div className={styles.gridSelection}>
        {result.map((movie, index) => (
          <SimilerMoviesCard key={index} {...movie} />
        ))}
      </div>
      {/* title: {selectedMovie.title}, description:{' '}
      {selectedMovie.description}, id: {selectedMovie.id}, image:{' '}
      {selectedMovie.image}, */}
      {/* <button onClick={handleSelectedMovie}>click me</button> */}
    </div>
  );
}
