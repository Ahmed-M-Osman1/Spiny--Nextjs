import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Movie } from '../helper/types';
export default function SelectedMovieCard({
  selectedMovie,
}: {
  selectedMovie: Movie;
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
        h={{ base: '100%', sm: '400px', lg: '500px' }}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
          textAlign={'center'}
        >
          For This Champion we choose:
        </Heading>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
          textAlign={'center'}
        >
          {selectedMovie.title}
        </Heading>
        <Text textAlign={'center'}>{selectedMovie.description}</Text>
      </Box>
    </Box>
  );
}
