import React from 'react';
import { Box, Center, Grid, Heading } from '@chakra-ui/react';
import { StaticImage } from "gatsby-plugin-image"

const HomeContent = () => {
  return (
    <Box >
      <Center>
        <Grid>
          <StaticImage
            src="../images/homeImage.JPG"
            alt="Hero Image"
            loading="eager"
            placeholder="blurred"
            objectFit="cover"
            style={{
              "minHeight": "100vh",
              "gridArea": "1/1"
            }}
          />
          <Heading gridArea="1/1" display="grid" pos="fixed" color="whitesmoke">
            Welcome to Mckee Vineyard!
          </Heading>
        </Grid>
      </Center>
    </Box>
  )
}

export default HomeContent;