import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react"

const Fullsize = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='full'>
      <DrawerOverlay />
      <DrawerCloseButton />
      <DrawerContent>
        <DrawerHeader>Fullsized Pic</DrawerHeader>
        <DrawerBody>
          hi
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Fullsize;