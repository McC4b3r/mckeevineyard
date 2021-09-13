import React from "react";
import {
  Box,
  Collapse,
} from "@chakra-ui/react";
import LinkStack from "./LinkStack";

const MenuLinks = ({ isOpen, isDesktop }) => {

  return (
    <Box
      mt="2"
      flexBasis={{ base: "100%", md: "auto" }}
    >
      {isDesktop ?
        <LinkStack />
        :
        <Collapse in={isOpen} animateOpacity>
          <LinkStack />
        </Collapse>}
    </Box>
  )
}

export default MenuLinks;