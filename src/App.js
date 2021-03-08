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
import {Route, Link} from 'react-router-dom';
import side from "./side"
import calculator from "./calculator"

function App() {
  return (
    <div ClassName="App">
      <Route path="/" component={side} />
      <Route exact path="/calculator" component={calculator} />
    </div>
    /*
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

      <Box mx="100">
        <Progress size="lg" 
          value={2}
          max={30} 
          min={1}
          marginTop="7"
        > </Progress>
      </Box>

      <Flex marginTop="5">
        <Box>
          <Icon as={FaMinus} />
          <Icon as={FaMinus} />
          <Icon as={FaMinus} />
          <Icon as={FaMinus} />
        </Box>
        <Spacer />
        <Box>
          <Icon as={FaMinus} />
          <Icon as={FaMinus} />
          <Icon as={FaMinus} />
          <Icon as={FaMinus} />
        </Box>
      </Flex>

      <FormControl id="enemyBuy" marginTop="6" width="48">
        <FormLabel>Enemy Buy</FormLabel>
        <Select placeholder="Select Enemy Buy">
          <option>Full Buy</option>
          <option>Full Save</option>
          <option>Half Buy</option>
        </Select>
      </FormControl>

      <FormControl id="roundOutcome" marginTop="6" width="48">
        <FormLabel>Round Outcome</FormLabel>
        <Select placeholder="Round Outcome">
          <option>Win</option>
          <option>Lose</option>
          <option>Enemy Team T-side Bomb Explodes</option>
        </Select>
      </FormControl>

    </ChakraProvider>
    */
    
  );
}

export default App;
