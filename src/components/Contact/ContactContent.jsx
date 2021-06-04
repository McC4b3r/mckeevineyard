import React from 'react';
import {
  Box,
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';
import ContactForm from "./ContactForm";

const ContactContent = () => {

  return (
    <Box>
      <VStack>
        <Center
          pb={10}
          pt={8}>
          <Heading size="2xl">
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