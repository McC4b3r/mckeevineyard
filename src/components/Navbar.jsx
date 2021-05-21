import React from 'react';
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import uniqid from 'uniqid';

const buttons = ['About', 'Gallery', 'History', 'Events', 'Contact'];

const headingFont = { "font-family": "Texturina" };

const Navbar = () => (
  <Flex pb={4} pt={4}>
    <Box pl="2" pr="2">
      <Heading
        as={GatsbyLink}
        to={"/"}
        sx={headingFont}
        size="xl">
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
          sx={{ "font-family": "KoHo" }}
          key={uniqid()}>
          {button}
        </Button>
      ))}
    </Box>
  </Flex >
)

export default Navbar;