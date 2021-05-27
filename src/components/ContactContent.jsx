import React from 'react';
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
  Grid,
  Heading
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

const ContactContent = () => {
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
      error = "Can not submit blank message"
    }
    return error;
  }

  return (
    <Box mr="2" ml="2">
      <VStack>
        <Center
          pb={10}
          pt={10}>
          <Heading size="2xl">
            Contact Us
            </Heading>
        </Center>
        <Center>
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
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
              }}
            >
              {(props) => (
                <Form>
                  <Grid
                    templateColumns="1fr 1fr"
                    gap={6}
                    pb={4}>
                    <Field
                      name="firstName"
                      validate={validateName}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.firstName && form.touched.firstName}>
                          <Center>
                            <FormLabel
                              htmlFor="firstName">
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
                  <VStack>
                    <Field
                      name="email"
                      validate={validateEmail}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                          <Center>
                            <FormLabel
                              htmlFor="email">
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
        </Center>
      </VStack>
    </Box >
  )
}

export default ContactContent;