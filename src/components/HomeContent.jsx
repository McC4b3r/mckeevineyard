import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const HomeContent = () => {

  const { heroImage } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "DSC_0499.JPG"}) {
        childrenImageSharp {
          gatsbyImageData(
            width: 2000
            placeholder: BLURRED
            quality: 50
            webpOptions: {quality: 70}
            )
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
        'min-height': "100vh"
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