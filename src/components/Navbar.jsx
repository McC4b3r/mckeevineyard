import React from 'react';
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react"

const Navbar = () => (
  <Flex p={6}>
    <Box p="2">
      <Heading size="lg">McKee Vineyard</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button as={GatsbyLink} to="/about" colorScheme="whatsapp" variant="ghost" mr="4">
        About
      </Button>
      <Button colorScheme="whatsapp" variant="ghost" mr="4">
        Gallery
      </Button>
      <Button colorScheme="whatsapp" variant="ghost" mr="4">
        History
      </Button>
      <Button colorScheme="whatsapp" variant="ghost">
        Events
      </Button>
      <Button colorScheme="whatsapp" variant="ghost">
        Contact
      </Button>
    </Box>
  </Flex>
)

export default Navbar;