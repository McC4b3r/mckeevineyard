import React from 'react';
import { Spacer, useDisclosure, } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBarContainer from "./NavBarContainer";
import MenuLinks from "./MenuLInks";
import MenuToggle from './MenuToggle';

const Navbar = (props) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <NavBarContainer {...props}>
      <Logo />
      <Spacer />
      <MenuToggle toggle={onToggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer >
  )
}

export default Navbar;