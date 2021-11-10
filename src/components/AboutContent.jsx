import React from 'react';
import { Box, Text, Heading } from "@chakra-ui/react"

const AboutContent = () => {

  const paragraph1 = <Text fontSize="md">
    The wines from the vineyard are generally estate designated as from the Lucky Well Vineyard.
  </Text>

  const paragraph2 = <Text fontSize="md">
    Looking at the older, as well as the more recent pictures of the house, it may appear the historic well is the reason for the vineyard designation.  Indeed, when Ray Furlong purchased the ranch in 1938 the well outside the house was known as having the sweetest water in the area and it never went dry.  Then again, in 1938 there was no electricity or means to supply the necessities of modern living: Indoor plumbing.
  </Text>

  const paragraph3 = <Text fontSize="md">
    One of the first priorities Ray had was finding a location for a more dependable well which could meet the needs.  The plan was to find a source close by and pump the water to a water tower up in the pasture and let the force of gravity flow it downhill to the house. One or Ray’s other sisters, Claire, decided to try and dowse for water which produced the two wells close enough to the house and water tower with enough water for what then was one house, and later supplied a caretakers house, a guest house and pool as well.  At the time all the wells were hand dug shallow wells approximately 20 feet deep.  They never went dry.
  </Text>

  const paragraph4 = <Text fontSize="md">
    When Ulises Valdez Sr. who designed and planted the vineyard, was looking for a well, he unsuccessfully tried a couple of locations.  In the process he struck up a conversation with our neighbor Bill Ruxton, whose father George was one of Ray’s best friends and hunting partners and bought their adjacent ranch, neighboring Ray’s in 1940, shortly after Ray bought his.  Bill pointed out a couple of other locations Claire had dowsed.  Ulises dug there and found the water that now supplies the vineyard and everything else.  Thereafter, Ulises named it the “Lucky Well Vineyard”.  So far, through several droughts, it has not run dry.
  </Text>

  const heading = <Heading>Lucky Well Vineyard</Heading>
  return (
    <Box mr="2" ml="2" >
      {heading}
      <br />
      {paragraph1}
      <br />
      {paragraph2}
      <br />
      {paragraph3}
      <br />
      {paragraph4}
      <br />
    </Box>
  )
}

export default AboutContent;