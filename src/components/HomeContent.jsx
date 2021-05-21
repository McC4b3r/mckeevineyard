import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import homeImage from '../images/homeImage.jpg'

const HomeContent = () => {
  return (
    <Box>
      <Image src={homeImage} />
    </Box>
  )
}

export default HomeContent;