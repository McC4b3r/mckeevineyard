import React from "react";
import {
  Box,
  Button,
  Stack,
  Collapse,
  useMediaQuery,
} from "@chakra-ui/react";
import LinkStack from "./LinkStack";

const MenuLinks = ({ isOpen }) => {
  const [isDesktop] = useMediaQuery("(min-width: 768px")

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