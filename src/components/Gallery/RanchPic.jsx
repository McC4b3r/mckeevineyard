import React from "react";
import { Box } from '@chakra-ui/react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RanchPic = ({ node }) => {
  const pic = getImage(node);
  console.log(node);
  return (
    <Box boxSize="sm">
      <GatsbyImage
        image={pic}
        alt="ranch"
      />
    </Box>
  )
}

export default RanchPic
