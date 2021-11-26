import React from 'react';
import { useForm } from '@formspree/react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Center,
  Textarea,
  VStack,
  Text,
  Grid,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("contact");
  if (state.succeeded) {
    return <Text fontSize="lg">Thanks for your submission! We'll get back to you.</Text>
  }

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Name is required"
    }
    return error;
  }

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Email is required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      error = 'Invalid email address';
    }
    return error;
  }

  const validateMessage = (value) => {
    let error;
    if (!value) {
      error = "Cannot submit blank message"
    }
    return error;
  }

  return (
    <Box
      p={4}
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md">
      <Formik
        initialValues={
          {
            firstName: "",
            lastName: "",
            email: "",
            message: ""
          }
        }
        onSubmit={(values, actions) => {
          setTimeout(() => {
            handleSubmit(values);
            actions.setSubmitting(false)
          }, 500)
        }}
      >
        {(props) => (
          <Form>
            <Grid
              templateColumns="1fr 1fr"
              gap={6}
              pb={8}>
              <Field
                name="firstName"
                validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.firstName && form.touched.firstName}>
                    <Center>
                      <FormLabel
                        htmlFor="firstName">
                        First Name
                      </FormLabel>
                    </Center>
                    <Input
                      {...field}
                      id="firstName"
                      placeholder="First Name" />
                    <FormErrorMessage>
                      {form.errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field
                name="lastName"
                validate={validateName}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                    <Center>
                      <FormLabel
                        htmlFor="lastName">
                        Last Name
                      </FormLabel>
                    </Center>
                    <Input
                      {...field}
                      id="lastName"
                      placeholder="Last Name" />
                    <FormErrorMessage>
                      {form.errors.lastName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Grid>
            <VStack spacing={8}>
              <Field
                name="email"
                type="email"
                validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <Center>
                      <FormLabel
                        htmlFor="email">
                        Email
                      </FormLabel>
                    </Center>
                    <Input
                      {...field}
                      id="email"
                      placeholder="Email Address" />
                    <FormErrorMessage>
                      {form.errors.email}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field
                name="message"
                validate={validateMessage}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.message && form.touched.message}>
                    <Center>
                      <FormLabel
                        htmlFor="message">
                        Message
                      </FormLabel>
                    </Center>
                    <Textarea
                      {...field}
                      id="message"
                      placeholder="Message" />
                    <FormErrorMessage>
                      {form.errors.message}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </VStack>
            <Center>
              <Button
                mt={4}
                colorScheme="whatsapp"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default ContactForm