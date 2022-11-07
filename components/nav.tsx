import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box>Spiny - Get Suggested</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={'/personal.jpg'} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar size={'2xl'} src={'/personal.jpg'} />
                  </Center>
                  <br />
                  <Center>
                    <p>Ahmed M.Osman</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link href="https://www.linkedin.com/in/ahmed-mosman/">
                    <MenuItem>Go To my LinkedIn</MenuItem>
                  </Link>
                  <Link href="https://twitter.com/devahmedosman">
                    <MenuItem>Go To my Twitter</MenuItem>
                  </Link>
                  <Link href="https://www.facebook.com/ahmed.osman93/">
                    <MenuItem>Go To my Facebook</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
