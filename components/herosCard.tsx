import {
  Flex,
  Box,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function HerosCard(props: {
  name: string;
  route: string;
  photo: string;
}) {
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
            src={props.photo}
            alt={`Picture of ${props.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Flex
              justifyContent="space-between"
              alignContent="center"
            >
              <Box
                fontSize="2xl"
                color={useColorModeValue('gray.800', 'white')}
              >
                {props.name}
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
    </Flex>
  );
}

export default HerosCard;
