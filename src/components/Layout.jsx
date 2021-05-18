import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Box p={6} >
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout;