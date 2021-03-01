import React from 'react';
import {
  ChakraProvider,
  Box,
  //Text,
  //Link,
  //VStack,
  //Code,
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

function App() {
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
      Choose Starting Side
      </Box>
      
      <ButtonGroup
        justifyContent="center"
        display="flex"
      >
        <Button
          colorScheme="red"
          fontSize="3xl"
          padding="6"
          marginRight="5"
        >
          T
        </Button>
        <Button
          colorScheme="blue"
          fontSize="3xl"
          padding="6"
        >
          CT
        </Button>
      </ButtonGroup> 

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
{/*
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
  */}
    </ChakraProvider>
    
  );
}

export default App;
