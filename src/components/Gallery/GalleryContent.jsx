import React, { useState } from 'react';
import {
  Wrap,
  useDisclosure,
  Box,
  Center,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import RanchPic from './RanchPic';
import Carousel from './Carousel';
// import Carousel from './Carousel';


const GalleryContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentClicked, setCurrentClicked] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const findPhoto = (ref) => {
    pics.forEach((pic, i) => {
      let { id } = pic.childImageSharp;
      if (id === ref) {
        setCurrentClicked(pic);
        setCurrentIndex(i);
        return;
      }
    })
    return;
  };

  const handleNext = () => {
    if (currentIndex === pics.length - 1) {
      setCurrentClicked(pics[0]);
      setCurrentIndex(0);
    } else {
      setCurrentClicked(pics[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  }

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentClicked(pics[pics.length - 1]);
      setCurrentIndex(pics.length - 1);
    } else {
      setCurrentClicked(pics[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleClick = (e) => {
    let currentRef = e.target.id;
    findPhoto(currentRef);
    onOpen();
  }

  return (
    <>
      <Center>
        <Box maxWidth="1200px" >
          <Wrap
            pt={4}
            justify="center"
            overflow="hidden">
            {pics.map((pic) => {
              return (
                <RanchPic
                  handleClick={handleClick}
                  node={pic}
                  onOpen={onOpen}
                  key={pic.id} />
              )
            })}
          </Wrap>
        </Box>
      </Center>
      <Carousel
        isOpenModal={isOpen}
        onOpenModal={onOpen}
        onCloseModal={onClose}
        pic={currentClicked}
        handleNext={handleNext}
        handlePrev={handlePrev} />
    </>
  )
}

export default GalleryContent;