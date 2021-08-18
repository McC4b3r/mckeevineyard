import React from "react";
import { Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      position="sticky"
      top="0px"
      zIndex='2'
      justify="space-between"
      wrap="wrap"
      w="100%"
      // mb={4}
      p={4}
      // bg={["primary.500", "primary.500", "transparent", "transparent"]}
      bg='white'
      // color={["white", "white", "primary.700", "primary.700"]}
      {...props} >
      {children}
    </Flex>
  )
}

export default NavBarContainer;