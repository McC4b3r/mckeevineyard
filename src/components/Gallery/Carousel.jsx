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
} from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image";

const Carousel = ({ isOpen, onClose, pic }) => {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale" >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          hi
        </ModalBody>
        <GatsbyImage image={pic} />
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Carousel