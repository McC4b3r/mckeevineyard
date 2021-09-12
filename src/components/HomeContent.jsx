import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
// import BackgroundImage from 'gatsby-background-image';

const HomeContent = () => {

  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: {eq: "DSC_0499.JPG"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 50,
              webpOptions: {quality: 70})
          }
        }
      }
    `
  )

  const pluginImage = getImage(heroImage)

  return (
    <BgImage
      image={pluginImage}
      style={{
        'minHeight': "100vh",
        'width': '100%',
      }}>
      <Box >
        <Center>
          <Heading
            color="whitesmoke">
            Welcome to Mckee Vineyard!
          </Heading>
        </Center>
      </Box >
    </BgImage>
  )
}

export default HomeContent;