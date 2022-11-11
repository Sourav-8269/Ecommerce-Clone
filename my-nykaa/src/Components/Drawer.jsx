import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Image,
    Box

  } from '@chakra-ui/react'
  import React from 'react'

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Box cursor="pointer">

        
        <img width="40px" ref={btnRef} colorScheme='teal' onClick={onOpen} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuHpX0w9qZ0W2baNDn5x1QCp4Wbmd0n2s9g&usqp=CAU" alt="text" />
  
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Bag</DrawerHeader>
  
            <DrawerBody>
              {/* <Input placeholder='Type here...' /> */}
              <Image borderRadius="100%" width="100%" height="250px" src="https://image.shutterstock.com/image-photo/paper-shopping-bag-on-pink-260nw-1993807145.jpg" />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </Box>
      </>
    )
  }
  export default DrawerExample;