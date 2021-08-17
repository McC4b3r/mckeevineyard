import React, { useState } from 'react';
import {
  Wrap,
  useDisclosure,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import RanchPic from './RanchPic';
import Carousel from './Carousel';
// import Carousel from './Carousel';


const GalleryContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = useStaticQuery(graphql`
    query {
      photos: allFile {
        pics: nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
            id
          }
        }
      }
    }
  `)

  if (loading) {
    setPics(data.photos.pics);
    setLoading(!loading);
  }

  // console.log(pics[0].childImageSharp.id);
  const findPhoto = (ref) => {
    pics.forEach((pic) => {
      let { id } = pic.childImageSharp;
      if (id === ref) {
        return pic;
      }
    })
  };

  let picRef;

  const handleClick = (e) => {
    let currentRef = e.target.id;
    console.log(currentRef);
  }

  return (
    <>
      <Wrap
        bg="red.100"
        pt={4}
        justify="center"
        overflowY="hidden">
        {pics.map((pic) => {
          picRef = findPhoto(pic.childImageSharp.id);
          return (
            <RanchPic
              handleClick={handleClick}
              node={pic}
              onOpen={onOpen}
              key={pic.id} />
          )
        })}
      </Wrap>
      <Carousel
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        pic={picRef} />
    </>
  )
}

export default GalleryContent;