import { Box, Center, Image } from '@chakra-ui/react';
import { StaticImage } from "gatsby-plugin-image"
import React from 'react';
// import homeImage from '../images/homeImage.jpg'

const HomeContent = () => {
  return (
    <Box>
      <Center>
        <StaticImage
          src="../images/homeImage.jpg"
          alt="heroImage" />
      </Center>
    </Box>
  )
}

export default HomeContent;