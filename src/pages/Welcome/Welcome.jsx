import React from 'react';
import { Box, Flex, Image, Text, VStack, HStack, Link, IconButton } from '@chakra-ui/react';
// import { SearchIcon } from '@chakra-ui/icons';
import pancakes from '../../assets/pancakes.jpg';

const Welcome = () => {
  return (
    <Box>
      <Flex direction={['column', 'column', 'column', 'row']} height="100vh">
        {/* Left Side */}
        <Box
          flex="1"
          bgImage={`url(${pancakes})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          position="relative"
        >
          <Flex
            position="absolute"
            top="0"
            left="0"
            right="0"
            justifyContent="space-between"
            p="4"
          >
            <HStack spacing="4">
              <Link href="#" color="white">Welcome</Link>
              <Link href="#" color="white">Recipes</Link>
              <Link href="#" color="white">Restaurants</Link>
              <Link href="#" color="white">Contact</Link>
            </HStack>
            {/* <SearchIcon /> */}
          </Flex>
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            height="100%"
            padding={"60px"}
          >
            <Text fontSize="7xl" color="white" fontWeight="bold" fontFamily="Abril Fatface, sans-serif">
              Welcome
            </Text>
          </Box>
        </Box>

        {/* Right Side */}
        <Flex
          flex="1"
          direction="column"
          justifyContent="center"
          alignItems="center"
          p="8"
          bg="white"
        >
          <Text fontSize="3xl" fontWeight="bold" color="black" fontFamily="Abril Fatface, sans-serif">
            It’s me, Jacqueline.
          </Text>
          <Text fontSize="xl" color="black">
            — Student, developer, and lover of food. Here you’ll be able to find reviews of recipes and restaurants.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Welcome;
