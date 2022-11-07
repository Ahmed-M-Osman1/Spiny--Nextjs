import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { Character } from '../helper/types';
import styles from '../styles/Home.module.css';

function HerosCard(props: Character) {
  return (
    <Flex
      p={5}
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
          position="relative"
        >
          <Image
            src={props.image}
            alt={`Picture of ${props.title}`}
            roundedTop="lg"
          />
          <Box p="6">
            <Flex align={'center'} justifyContent={'center'}>
              <Box
                fontSize="2xl"
                color={useColorModeValue('gray.800', 'white')}
              >
                <Text textAlign={'center'}>{props.title}</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
    </Flex>
  );
}

export default HerosCard;
