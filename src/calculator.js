import React from 'react';
import {
  Wrap,
  WrapItem,
  Avatar,
  Image,
  Grid,
  ChakraProvider,
  Box,
  Center,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  Spacer,
  theme,
  Button,
  Progress,
  Badge,
  ButtonGroup,
  Icon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { FaMinus } from 'react-icons/fa';

function calculator() {
  return (
 
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        fontFamily="sans-serif"
        fontSize="3xl"
        height="16"
        justifyContent="center" 
        alignItems="center" 
        display="flex"
      >
      <text>Choose Starting Side</text>
      </Box>

      <Center>
        <Button variant="ghost" width="10" marginRight="12">
          <Avatar size="lg" name="T" src="assets/images/tsidelogo.png" />
        </Button>
        <Button variant="ghost" width="10">
          <Avatar name="CT" src="assets/images/ctsidelogo.jpg" />
        </Button>
      </Center>
    </ChakraProvider>
    
    
  );
}

export default calculator;