import React from "react";
import { Stack, Button } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import uniqid from 'uniqid';

const buttons = ['About', 'Gallery', 'History', 'Events', 'Contact'];

const LinkStack = () => {
  return (
    <Stack
      spacing={[0, 0, 2, 2]}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}>
      {buttons.map((button, i) => (
        <Button
          as={GatsbyLink}
          to={`/${button.toLowerCase()}`} colorScheme="whatsapp"
          variant="ghost"
          sx={{ "font-family": "KoHo" }}
          key={uniqid()}>
          {button}
        </Button>
      ))}
    </Stack>
  )
}

export default LinkStack;