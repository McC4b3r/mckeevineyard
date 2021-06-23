import React from 'react';
import { Box } from '@chakra-ui/react';
import ranchLinks from './links';
import RanchPic from './RanchPic';


const GalleryContent = () => {
  return (
    <Box mr="2" ml="2">
      {ranchLinks.map((link) => (
        <RanchPic url={link} />
      ))}
    </Box>
  )
}

export default GalleryContent;