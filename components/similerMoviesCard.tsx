import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { Movie } from '../helper/types';
import styles from '../styles/Home.module.css';

function SimilarMoviesCard(props: Movie) {
  return (
    <Flex
      p={4}
      alignItems="center"
      justifyContent="center"
      max-width="500px"
    >
      <div className={styles.card}>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          height="670px"
        >
          <Image
            src={props.image}
            alt={`Picture of ${props.title}`}
            roundedTop="lg"
            height={'xl'}
          />

          <Box p="6">
            <Flex
              justifyContent="space-between"
              alignContent="center"
            >
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
                textAlign={'center'}
              >
                {props.title}
              </Heading>
            </Flex>
          </Box>
        </Box>
      </div>
    </Flex>
  );
}

export default SimilarMoviesCard;
