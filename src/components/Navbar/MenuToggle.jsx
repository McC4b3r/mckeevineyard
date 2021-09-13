import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const MenuToggle = ({ toggle, isOpen, isDesktop }) => {

  return (
    <Box>
      {isDesktop ? null :
        <Box
          display={{ base: "block", md: "none" }}
          onClick={toggle}>
          {isOpen ?
            <CloseIcon
              boxSize={4}
              mr={1} />
            :
            <HamburgerIcon
              boxSize={6} />
          }
        </Box>}
    </Box>
  )
}

export default MenuToggle;