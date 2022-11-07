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
  Button,
} from '@chakra-ui/react';
import HerosCard from '../../../components/herosCard';
import Link from 'next/link';
import SimilerMoviesCard from '../../../components/similerMoviesCard';
import { ArrowForwardIcon } from '@chakra-ui/icons';

type Movie = {
  title: string;
  description: string;
  id: number;
  image: string;
  resultType: string;
};

type Parameters = {
  character: string;
};

type Hero = {
  route: string;
  title: string;
  image: string;
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
  await apiInstance
    .get(`/SearchTitle/k_4rgq7u85/${selectedHero[0].route}`)
    .then((response) => {
      if (response.data) {
        res = response.data.results;
        return res;
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return {
    props: {
      result: res,
      selectedHero: selectedHero,
    },
  };
};

export default function superHero({
  result,
  selectedHero,
}: {
  result: Array<Movie>;
  selectedHero: Array<Hero>;
}) {
  const [selectedMovie, setSelectedMovie] = useState<Movie>({});
  useEffect(() => {
    handleSelectedMovie();
  }, []);

  const handleSelectedMovie = () =>
    setSelectedMovie(
      result[generateRandomNumber(0, result.length - 1)]
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
                <Center>
                  <Link
                    href={{
                      pathname: `/superheros/${selectedHero[0].route}/${selectedMovie.id}`,
                      query: JSON.stringify([2, 3]),
                    }}
                  >
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      colorScheme="teal"
                      variant="outline"
                    >
                      See Movie Details
                    </Button>
                  </Link>
                </Center>
                <Center>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="teal"
                    variant="outline"
                    onClick={handleSelectedMovie}
                  >
                    Get Anther Random movie for the same Champion
                  </Button>
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
