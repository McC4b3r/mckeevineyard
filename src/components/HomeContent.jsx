import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { StaticImage } from "gatsby-plugin-image"

const HomeContent = () => {
  return (
    <Box >
      <Center>
        <StaticImage
          src="../images/homeImage.jpg"
          alt="Hero Image"
          loading="eager"
          placeholder="blurred"
          objectFit="cover"
          style={{
            "minHeight": "100vh"
          }}
        />
      </Center>
    </Box>
  )
}

export default HomeContent;