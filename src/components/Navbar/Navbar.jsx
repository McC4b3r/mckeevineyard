import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import uniqid from 'uniqid';
import Logo from "./Logo";
import MenuLinks from "./MenuLInks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      pb={8}
      pl={4}
      pr={4}
      pt={4}>
      <Logo />
      <Spacer />
      <MenuLinks />
    </Flex >
  )
}

export default Navbar;