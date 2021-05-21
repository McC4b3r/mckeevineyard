import { Box, Center, Image } from '@chakra-ui/react';
import React from 'react';
import homeImage from '../images/homeImage.jpg'

const HomeContent = () => {
  return (
    <Box>
      <Center>
        <Image
          src={homeImage}
          objectFit="scale-down"
          transformOrigin="10" />
      </Center>
    </Box>
  )
}

export default HomeContent;