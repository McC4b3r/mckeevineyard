import React, { useState } from 'react';
import { Spacer } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBarContainer from "./NavBarContainer";
import MenuLinks from "./MenuLInks";
import MenuToggle from './MenuToggle';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <Spacer />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer >
  )
}

export default Navbar;