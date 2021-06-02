import React from "react";
import { Box, Fade } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      onClick={toggle}>
      {isOpen ?
        <Fade in={isOpen}>
          <CloseIcon
            boxSize={4}
            mr={1} />
        </Fade>
        :
        <Fade in={!isOpen}>
          <HamburgerIcon
            boxSize={6} />
        </Fade>
      }
    </Box>
  )
}

export default MenuToggle;