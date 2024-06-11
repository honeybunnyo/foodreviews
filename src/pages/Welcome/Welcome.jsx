import React from 'react';
import { Box, Flex, Text, VStack, HStack, Link, IconButton, useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton } from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon} from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import pancakes from '../../assets/pancakes.jpg';
import LeftPage from '../../component/LeftPage/LeftPage';

const Welcome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex direction={['column', 'column', 'column', 'row']} height="100vh">
        {/* Left Side */}
        
        <LeftPage title="Welcome" imagePath={pancakes} onOpen={onOpen} />

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
