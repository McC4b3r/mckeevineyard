import React from 'react';
import { Spacer, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBarContainer from "./NavBarContainer";
import MenuLinks from "./MenuLInks";
import MenuToggle from './MenuToggle';

const Navbar = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 768px)") || true;

  return (
    <NavBarContainer {...props}>
      <Logo />
      <Spacer />
      <MenuToggle
        toggle={onToggle}
        isOpen={isOpen}
        isDesktop={isDesktop} />
      <MenuLinks
        isOpen={isOpen}
        isDesktop={isDesktop} />
    </NavBarContainer >
  )
}

export default Navbar;