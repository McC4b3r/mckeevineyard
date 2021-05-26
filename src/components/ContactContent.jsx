import React from 'react';
import { Box, Button, Input, FormControl, FormLabel, FormErrorMessage, Center, HStack, Textarea, VStack } from '@chakra-ui/react';
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
      error = "Email can not be blank"
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
      <Center>
        <Box
          p={4}
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden">
          <Formik
            initialValues={{ firstName: "", lastName: "" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {(props) => (
              <Form>
                <HStack
                  spacing="24px"
                  pb={4}>
                  <Field name="firstName" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <Center>
                          <FormLabel htmlFor="firstName">First name</FormLabel>
                        </Center>
                        <Input {...field} id="firstName" placeholder="First Name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="lastName" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <Center>
                          <FormLabel htmlFor="lastName">Last name</FormLabel>
                        </Center>
                        <Input {...field} id="lastName" placeholder="Last Name" />
                        <FormErrorMessage>{form.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>
                <VStack>
                  <Field name="email" validate={validateEmail}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <Center>
                          <FormLabel htmlFor="email">Email Address</FormLabel>
                        </Center>
                        <Input {...field} id="email" placeholder="Email Address" />
                        <FormErrorMessage>{form.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="message" validate={validateMessage}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.error && form.touched.name}>
                        <Center>
                          <FormLabel htmlFor="message">Message</FormLabel>
                        </Center>
                        <Textarea {...field} id="message" placeholder="Message" />
                        <FormErrorMessage>{form.error}</FormErrorMessage>
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
    </Box >
  )
}

export default ContactContent;