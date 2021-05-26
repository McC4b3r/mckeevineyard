import React from 'react';
import { Box } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const EventsContent = () => {
  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Name is required"
    }
    return error;
  }
  return (
    <Box mr="2" ml="2">
      This is the content of the Events page
    </Box>
  )
}

export default EventsContent;