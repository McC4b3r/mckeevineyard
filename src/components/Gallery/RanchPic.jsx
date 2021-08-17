import React from "react";
import { WrapItem } from '@chakra-ui/react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RanchPic = ({ onOpen, node, handleClick }) => {
  const pic = getImage(node);
  const { id } = node.childImageSharp;

  return (
    <WrapItem
      pl={1}
      pr={1}
      pb={1}
      maxW="72"
      borderRadius="sm">
      <GatsbyImage
        onClick={handleClick}
        image={pic}
        alt=""
        id={id}
      />
    </WrapItem>
  )
}

export default RanchPic
