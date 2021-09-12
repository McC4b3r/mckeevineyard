import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const HomeContent = () => {

  const headingFont = { "fontFamily": "IBM Plex Sans" };

  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: {eq: "DSC_0637_00001_00002.jpg"}) {
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
        'width': '100%'
      }}>
      <Box >
        <Center
          pt={12}>
          <Heading
            color="white"
            pl="4"
            pr="4"
            textShadow="#3f3e3e57 3px 3px 3px"
            sx={headingFont}
            size="3xl">
            Welcome to Mckee Vineyard!
          </Heading>
        </Center>
      </Box >
    </BgImage>
  )
}

export default HomeContent;