import React from 'react';
import { Box, Text, Heading, Center, Divider } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image";

const AboutContent = () => {

  const headingFont = { "fontFamily": "IBM Plex Sans" };
  const textFont = { "fontFamily": "Ubuntu" }

  const heading =
    (<Center pb="3">
      <Heading sx={headingFont}>
        Lucky Well Vineyard
      </Heading>
    </Center>)

  const paragraph1 =
    <Text
      fontSize="lg"
      sx={textFont}
      mt="5" >
      The wines from the vineyard are generally estate designated as from the Lucky Well Vineyard.
    </Text>

  const paragraph2 =
    <Text
      fontSize="lg"
      sx={textFont}>
      Looking at the older, as well as the more recent pictures of the house, it may appear the historic well is the reason for the vineyard designation.  Indeed, when Ray Furlong purchased the ranch in 1938 the well outside the house was known as having the sweetest water in the area and it never went dry.  Then again, in 1938 there was no electricity or means to supply the necessities of modern living: Indoor plumbing.
    </Text>

  const paragraph3 =
    <Text
      fontSize="lg"
      sx={textFont}>
      One of the first priorities Ray had was finding a location for a more dependable well which could meet the needs.  The plan was to find a source close by and pump the water to a water tower up in the pasture and let the force of gravity flow it downhill to the house. One or Ray’s other sisters, Claire, decided to try and dowse for water which produced the two wells close enough to the house and water tower with enough water for what then was one house, and later supplied a caretakers house, a guest house and pool as well.  At the time all the wells were hand dug shallow wells approximately 20 feet deep.  They never went dry.
    </Text>

  const paragraph4 =
    <Text
      fontSize="lg"
      sx={textFont}
      pb="8">
      When Ulises Valdez Sr. who designed and planted the vineyard, was looking for a well, he unsuccessfully tried a couple of locations.  In the process he struck up a conversation with our neighbor Bill Ruxton, whose father George was one of Ray’s best friends and hunting partners and bought their adjacent ranch, neighboring Ray’s in 1940, shortly after Ray bought his.  Bill pointed out a couple of other locations Claire had dowsed.  Ulises dug there and found the water that now supplies the vineyard and everything else.  Thereafter, Ulises named it the “Lucky Well Vineyard”.  So far, through several droughts, it has not run dry.
    </Text>

  return (
    <Box
      bgGradient="linear(to-b, white, #bafbaa)"
      style={{
        'minHeight': "92vh",
      }}>
      <Center>
        <Box
          maxW="4xl"
          mr="10"
          ml="10"
          pt="12" >
          {heading}
          <Divider />
          < br />
          <Box >
            {paragraph1}
            < br />
            < br />
            {paragraph2}
            < br />
            < br />
            {paragraph3}
            < br />
            < br />
            <StaticImage
              src="../images/historyPics/2019RanchHouse1.png"
              alt="LuckyWell" />
            <br />
            <br />
            <br />
            {paragraph4}
            <Divider />
            <br />
            <br />
          </Box>
        </Box >
      </Center>
    </Box>
  )
}

export default AboutContent;