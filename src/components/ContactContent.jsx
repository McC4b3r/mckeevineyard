import React from 'react';
import { Box } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactContent = () => {
  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Name is required"
    }
    return error;
  }

  return (
    <Box mr="2" ml="2">
      This will be the Contact us page content
    </Box>
  )
}

export default ContactContent;