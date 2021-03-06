import React, { useEffect, useState } from 'react';
import { Spacer, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBarContainer from "./NavBarContainer";
import MenuLinks from "./MenuLInks";
import MenuToggle from './MenuToggle';

const Navbar = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  //
  return isLoaded ?
    (
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
    :
    (
      <NavBarContainer {...props}>
        <Logo />
        <Spacer />
      </NavBarContainer >
    )
}

export default Navbar;