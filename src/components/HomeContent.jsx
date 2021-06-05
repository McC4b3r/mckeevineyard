import { Box, Center, Image } from '@chakra-ui/react';
// import { StaticImage } from "gatsby-plugin-image"
import React from 'react';

const url = "https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_992x558_crop_center-center_82_line/craft-cms-custom-field-leveraging-platform-2.jpg.webp"

const HomeContent = () => {
  return (
    <Box >
      <Center>
        <Image
          src={url}
          alt="heroImage"
          minH="100vh"
          // placeholder="blurred"
          minW="100vw" />
      </Center>
    </Box>
  )
}

export default HomeContent;