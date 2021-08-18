import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Fullsize from "./Fullsize";

const Carousel = ({
  isOpen,
  onClose,
  pic,
  handleNext,
  handlePrev
}) => {
  const modalPic = getImage(pic);


  const {
    isOpen: isOpenFull,
    onOpen: onOpenFull,
    onClose: onCloseFull
  } = useDisclosure();

  const handlePicClick = () => {
    onOpenFull();
  }

  return (
    <>
      <Modal
        size='6xl'
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom" >
        <ModalOverlay overflow='hidden' />
        <ModalContent >
          <ModalHeader>Expanded Photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <HStack>
              <Button onClick={handlePrev} zIndex="1" >
                <ArrowLeftIcon />
              </Button>
              <Box
                as={GatsbyImage}
                loading="eager"
                // cursor="zoom-in"
                image={modalPic}
                onClick={handlePicClick}
                alt="" />
              <Button
                onClick={handleNext}
                zIndex="1">
                <ArrowRightIcon />
              </Button>
            </HStack>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal >
      <Fullsize
        isOpen={isOpenFull}
        onOpen={onOpenFull}
        onClose={onCloseFull}
        pic={modalPic} />
    </>
  )
}

export default Carousel