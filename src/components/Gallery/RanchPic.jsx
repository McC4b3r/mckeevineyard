import React from "react";
import {
  WrapItem,
  Box,
} from '@chakra-ui/react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RanchPic = ({ onOpen, node, handleClick }) => {
  const pic = getImage(node);
  const { id } = node.childImageSharp;

  return (
    <WrapItem
      boxShadow="md"
      maxW="72"
      overflow="hidden"
      borderRadius="md">
      <Box as={GatsbyImage}
        borderRadius="md"
        cursor="pointer"
        transition="0.3s"
        _hover={{ opacity: '90%', transform: 'scale(1.05)' }}
        onClick={handleClick}
        image={pic}
        alt=""
        id={id}
      />
    </WrapItem>
  )
}

export default RanchPic
