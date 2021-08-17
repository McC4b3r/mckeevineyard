import React from "react";
import { WrapItem } from '@chakra-ui/react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RanchPic = ({ onOpen, node, handleClick }) => {
  const pic = getImage(node);
  const { id } = node.childImageSharp;

  return (
    <WrapItem
      pl={2}
      pr={2}
      pb={1}
      maxW="xl">
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
