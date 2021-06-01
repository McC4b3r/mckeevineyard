import React from "react";
import { Link as GatsbyLink } from 'gatsby';
import { Box, Heading } from "@chakra-ui/react";

const headingFont = { "font-family": "Texturina" };

const Logo = () => {
  return (
    <Box pl="2" pr="2">
      <Heading
        as={GatsbyLink}
        to={"/"}
        sx={headingFont}
        size="xl">
        McKee Vineyard
      </Heading>
    </Box>
  )
}

export default Logo;