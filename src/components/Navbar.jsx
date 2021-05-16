import React from 'react';
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react"

const buttons = ['About', 'Gallery', 'History', 'Events', 'Contact'];

const Navbar = () => (
  <Flex p={6}>
    <Box p="2">
      <Heading size="lg">McKee Vineyard</Heading>
    </Box>
    <Spacer />
    <Box>
      {buttons.map((button) => {
        return <Button
          as={GatsbyLink}
          to={`/${button.toLowerCase()}`} colorScheme="whatsapp"
          variant="ghost"
          mr="4">
          {button}
        </Button>
      })}
    </Box>
  </Flex>
)

export default Navbar;