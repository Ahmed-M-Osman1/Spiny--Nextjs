import apiInstance from '../../../api/apiInstance';
import { characters } from '../../../helper/characters';
import React, { useState, useEffect } from 'react';
import Nav from '../../../components/nav';
import styles from '../../../styles/Home.module.css';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Center,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import SimilarMoviesCard from '../../../components/similerMoviesCard';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Character, Movie, Parameters } from '../../../helper/types';
import { generateRandomNumber } from '../../../helper/generateRandom';
import SelectedMovieCard from '../../../components/selectedMovieCard';
import { apiKey } from '../../../api/apiKey';

// ServerSide rendering: (To show that I'm able to use serverSide rendering)
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
  // filtering Heros according to the params
  const selectedHero = characters.filter(
    (p) => p.route === params.character
  );
  let apiResponse: Array<object> = [];
  await apiInstance
    .get(`/SearchTitle/${apiKey}/${selectedHero[0].route}`)
    .then((response) => {
      if (response.data) {
        apiResponse = response.data.results;
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return {
    props: {
      allMovies: apiResponse,
      selectedHero: selectedHero,
    },
  };
};

export default function superHero({
  allMovies,
  selectedHero,
}: {
  allMovies: Array<Movie>;
  selectedHero: Array<Character>;
}): JSX.Element {
  // use Local state. No need for redux (actually I did use Redux in RN so It will be just a repeat - It will be more challenging to use local state.)
  const [selectedMovie, setSelectedMovie] = useState<Movie>({
    title: '',
    description: '',
    id: 0,
    image: '',
    resultType: '',
  });

  useEffect(() => {
    handleSelectedMovie();
  }, []);

  const handleSelectedMovie = () =>
    // generate a random index to display movie. Save server calls.
    setSelectedMovie(
      allMovies[generateRandomNumber(0, allMovies.length - 1)]
    );

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
            <SelectedMovieCard
              selectedMovie={selectedMovie}
              selectedHero={selectedHero[0]}
            />

            <Center>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="red"
                variant="outline"
                onClick={handleSelectedMovie}
                color={'red'}
              >
                Get Anther Random movie for the same Champion
              </Button>
            </Center>
          </Stack>
          <Image
            rounded={'md'}
            alt={'Movie image'}
            src={selectedMovie.image}
            fit={'cover'}
            align={'center'}
            max-height={'100%'}
            max-width={'100%'}
            w={{ base: '100%', sm: '300px', lg: '400px' }}
          />
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
        {allMovies.map((movie, index) => (
          <SimilarMoviesCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}
