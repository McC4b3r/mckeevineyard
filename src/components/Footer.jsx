import { Box, Center, Text } from '@chakra-ui/layout';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <Box>
        <Center h="100px">
          <Text fontSize="xs">
            © 2021 The Ranch
          </Text>
        </Center>
      </Box>
    </div>
  )
}

export default Footer;