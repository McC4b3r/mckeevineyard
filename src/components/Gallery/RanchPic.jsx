import React from "react";
import { Box, Image } from '@chakra-ui/react';
// import { GatsbyImage } from "gatsby-plugin-image"

const RanchPic = ({ url }) => (
  <Box boxSize="sm">
    <div>{url}</div>
  </Box>
)

export default RanchPic
