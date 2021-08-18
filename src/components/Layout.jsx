import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <Box
    // bgGradient="linear(to-r, #0f0f0f,#0f18c2)"
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout;