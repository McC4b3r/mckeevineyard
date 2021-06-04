import { Box, Center } from '@chakra-ui/react';
import { StaticImage } from "gatsby-plugin-image"
import React from 'react';

const HomeContent = () => {
  return (
    <Box >
      <Center>
        <StaticImage
          src={"../images/homeImage.jpg"}
          alt="heroImage"
          placeholder="blurred" />
      </Center>
    </Box>
  )
}

export default HomeContent;