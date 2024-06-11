import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  Image,
  Button,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import recipesData from '../../recipes.json'; // Import the recipes data
import { SearchIcon} from '@chakra-ui/icons';
import pancakes from '../../assets/pancakes.jpg';
import LeftPage from '../../component/LeftPage/LeftPage';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Load the recipes data from the JSON file
    setRecipes(recipesData);
  }, []);

  return (
    <Box>
      <Flex direction={['column', 'column', 'column', 'row']} height="100vh">
      <LeftPage title="Recipes" imagePath={pancakes} onOpen={onOpen} />

        {/* Right Side */}
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            color={['white', 'white', 'white', 'black']}
            position="absolute"
            variant="none"
            top="4"
            right="4"
          />
        <Flex
          flex="1"
          direction="column"
          p="8"
          bg="white"
        >
          <VStack spacing="6" align="left">
            {recipes.map((recipe, index) => (
              <HStack key={index} spacing="4" align="top">
                <Image src={recipe.image} width={"300"} height={"175"} objectFit="cover" />
                <Box>
                  <Text fontSize="l" color={"black"} fontFamily="Abril Fatface, sans-serif">{recipe.name}</Text>
                  <Text fontSize="sm" color="gray.500">{recipe.date}</Text>
                  <Link href={`/recipe/${index}`} color="teal.500">Read more</Link>
                </Box>
              </HStack>
            ))}
          </VStack>
          <Button mt="8" colorScheme="teal" variant="outline">Load more posts</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Recipes;
