import React from 'react';
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import uniqid from 'uniqid';

const buttons = ['About', 'Gallery', 'History', 'Events', 'Contact'];

const Navbar = () => (
  <Flex p={6}>
    <Box p="2">
      <Heading
        as={GatsbyLink}
        to={"/"}
        size="lg">
        McKee Vineyard
      </Heading>
    </Box>
    <Spacer />
    <Box mt="2">
      {buttons.map((button, i) => (
        <Button
          as={GatsbyLink}
          to={`/${button.toLowerCase()}`} colorScheme="whatsapp"
          variant="ghost"
          mr={i === buttons.length - 1 ? "0" : "4"}
          key={uniqid()}>
          {button}
        </Button>
      ))}
    </Box>
  </Flex>
)

export default Navbar;