import { Box, Center, Image } from '@chakra-ui/react';
// import { StaticImage } from "gatsby-plugin-image"
import React from 'react';
import homeImage from '../images/homeImage.jpg';

const HomeContent = () => {
  return (
    <Box >
      <Center>
        <Image
          src={homeImage}
          alt="heroImage"
          pos="relative"
          minH="100vh"
          objectFit="cover"
        // placeholder="blurred"
        />
      </Center>
    </Box>
  )
}

export default HomeContent;