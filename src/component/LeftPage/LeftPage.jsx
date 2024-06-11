import React from 'react';
import { Box, Flex, Text, HStack, IconButton, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const LeftPage = ({ title, imagePath, onOpen }) => {
  return (
    <Box
      flex="1"
      bgImage={`url(${imagePath})`}
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
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          variant="none"
          color="white"
          display={['block', 'block', 'block', 'none']}
          onClick={onOpen}
        />
        <h1> </h1>
        <HStack spacing="8" display={['none', 'none', 'none', 'flex']} padding={"10px"}>
          <NavLink to="/" exact activeClassName="active-link">
            <Link href="#" color="white" fontFamily="Abril Fatface, sans-serif">Welcome</Link>
          </NavLink>
          <NavLink to="/recipes" activeClassName="active-link">
            <Link href="#" color="white" fontFamily="Abril Fatface, sans-serif">Recipes</Link>
          </NavLink>
          <NavLink to="/restaurants" activeClassName="active-link">
            <Link href="#" color="white" fontFamily="Abril Fatface, sans-serif">Restaurants</Link>
          </NavLink>
          <NavLink to="/contact" activeClassName="active-link">
            <Link href="#" color="white" fontFamily="Abril Fatface, sans-serif">Contact</Link>
          </NavLink>
        </HStack>
      </Flex>
      <Box
        display="flex"
        justifyContent="left"
        alignItems="center"
        height="100%"
        padding={"60px"}
      >
        <Text fontSize="7xl" color="white" fontFamily="Abril Fatface, sans-serif">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default LeftPage;
