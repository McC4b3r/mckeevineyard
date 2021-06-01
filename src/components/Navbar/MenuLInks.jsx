import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import uniqid from 'uniqid';

const buttons = ['About', 'Gallery', 'History', 'Events', 'Contact'];

const MenuLinks = () => {
  return (
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
  )
}

export default MenuLinks;