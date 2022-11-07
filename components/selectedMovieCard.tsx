import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Movie, Character } from '../helper/types';
export default function SelectedMovieCard({
  selectedMovie,
  selectedHero,
}: {
  selectedMovie: Movie;
  selectedHero: Character;
}) {
  return (
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
        h={{ base: '100%', sm: '300px', lg: '400px' }}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
          textAlign={'center'}
          p={5}
          color={'red'}
        >
          For This Champion we choose:
        </Heading>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
          textAlign={'center'}
          p={5}
        >
          {selectedMovie.title}
        </Heading>
        <Text textAlign={'center'} p={5}>
          {selectedMovie.description}
        </Text>
        <Center>
          <Link
            href={`/superheros/${selectedHero.route}/${selectedMovie.id}`}
            passHref
          >
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="red"
              variant="outline"
              p={5}
              color={'red'}
            >
              See Movie Details
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
}
