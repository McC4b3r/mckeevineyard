import React from "react";
import { Link as GatsbyLink } from 'gatsby';
import { Box, Heading } from "@chakra-ui/react";

const headingFont = { "fontFamily": "IBM Plex Sans" };

const Logo = () => {
  return (
    <Box pl="2" pr="2">
      <Heading
        as={GatsbyLink}
        textShadow="#3f3e3e57 3px 3px 3px"
        to={"/"}
        sx={headingFont}
        size="2xl">
        McKee Vineyard
      </Heading>
    </Box>
  )
}

export default Logo;