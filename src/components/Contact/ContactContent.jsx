import React from 'react';
import {
  Box,
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';
import ContactForm from "./ContactForm";

const ContactContent = () => {

  const headingFont = { "font-family": "IBM Plex Sans" }

  return (
    <Box>
      <VStack
        minH="80vh">
        <Center
          pb={10}
          pt={8}>
          <Heading
            size="2xl"
            sx={headingFont}
            textShadow="#3f3e3e42 3px 3px 3px">
            Contact Us
          </Heading>
        </Center>
        <Center>
          <ContactForm />
        </Center>
      </VStack>
    </Box >
  )
}

export default ContactContent;