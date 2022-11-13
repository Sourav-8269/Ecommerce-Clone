import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
    Image,
    Heading,
    Checkbox,
    allChecked,
    Stack,

  } from '@chakra-ui/react'

  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

  import { useState } from 'react'

const Checkout = () => {

    const [boolean,setboolean]=useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [checkedItems, setCheckedItems] = React.useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleclick=()=>{
        if(boolean){
            setboolean(false)
        }else{
            setboolean(true)
        }
    }
        return (
          <Box mt={20}>
            <Box display="flex">
            <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg" />

            </Box>
            <Box justifyContent="right" mb={50}>
                <Heading>Choose Address & Payment Option</Heading>

            <Box  padding="5%" border="5px solid whitesmoke" borderRadius="20px" width="50%" margin="auto"  mt={35}>
            <Button padding="5%" onClick={onOpen}>Add New Address</Button>
            </Box>
            </Box>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input ref={initialRef} placeholder='Name' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Mobile</FormLabel>
                    <Input placeholder='Mobile Number' />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Address</FormLabel>
                    <Input placeholder='Add New Address' />
                  </FormControl>
                  <Checkbox
                  mt={6}
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                >
                    Payment Method
                </Checkbox>
                <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                    >
                    G Pay,Phone Pe, Bhim UPI, Credit Card
                    </Checkbox>
                    <Checkbox
                    isChecked={checkedItems[1]}
                    onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                    >
                    Cash on Delivery
                    </Checkbox>
                </Stack>
                </ModalBody>
                {boolean && <ModalBody>
                <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Order submitted!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Thanks for submitting your Order. Your Order will be delevered soon.
                    </AlertDescription>
                    </Alert>
                </ModalBody>}
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={handleclick} >
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        )
      }


export default Checkout