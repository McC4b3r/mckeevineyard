import React from "react";
import {
  Box,
  Collapse,
  useMediaQuery,
} from "@chakra-ui/react";
import LinkStack from "./LinkStack";

const MenuLinks = ({ isOpen }) => {
  const [isDesktop] = useMediaQuery("(minWidth: 768px")

  return (
    <Box
      mt="2"
      flexBasis={{ base: "100%", md: "auto", lg: "auto", xl: "auto" }}
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