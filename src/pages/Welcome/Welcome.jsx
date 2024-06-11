import React from 'react';
import { Box, Flex, Text, VStack, HStack, Link, IconButton, useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, } from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon} from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

import pancakes from '../../assets/pancakes.jpg';

const Welcome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            variant="none"
            color="white"
            display={['block', 'block', 'block', 'none']}
            onClick={onOpen}
          />
            <h1></h1>
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
          {/* <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            color={['white', 'white', 'white', 'black']}
            position="absolute"
            variant="none"
            top="4"
            right="4"
          /> */}
          <Text fontSize="4xl" color="black" fontFamily="Abril Fatface, sans-serif">
            It’s me, Jacqueline.
          </Text>
          <Text fontSize="xl" color="black" padding={"40px"}>
            — Student, developer, and lover of food. Here you’ll be able to find reviews of recipes and restaurants.
          </Text>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay bg="black">
          <DrawerContent bg="black">
            <DrawerBody>
            <DrawerCloseButton  position="absolute" top="4" left="4"/>
              <VStack spacing="6" marginTop={"60px"} align={"left"}>
                <NavLink to="/" exact activeClassName="active-link" onClick={onClose} style={{ fontFamily: 'Abril Fatface, sans-serif', fontSize: '24px' }}>
                  Welcome
                </NavLink>
                <NavLink to="/recipes" activeClassName="active-link" onClick={onClose} style={{ fontFamily: 'Abril Fatface, sans-serif', fontSize: '24px' }}>
                  Recipes
                </NavLink>
                <NavLink to="/restaurants" activeClassName="active-link" onClick={onClose} style={{ fontFamily: 'Abril Fatface, sans-serif', fontSize: '24px' }}>
                  Restaurants
                </NavLink>
                <NavLink to="/contact" activeClassName="active-link" onClick={onClose} style={{ fontFamily: 'Abril Fatface, sans-serif', fontSize: '24px' }}>
                  Contact
                </NavLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Welcome;
