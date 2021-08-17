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
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Carousel = ({
  isOpen,
  onClose,
  pic,
  handleNext,
  handlePrev
}) => {
  const modalPic = getImage(pic);

  return (
    <Modal
      size='6xl'
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale" >
      <ModalOverlay overflow='hidden' />
      <ModalContent >
        <ModalHeader>Expanded Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody >
          <HStack>
            <Button onClick={handlePrev} zIndex="1" >
              <ArrowLeftIcon />
            </Button>
            <GatsbyImage image={modalPic} alt="" />
            <Button onClick={handleNext} zIndex="1">
              <ArrowRightIcon />
            </Button>
          </HStack>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}

export default Carousel