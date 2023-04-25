import React, { useEffect } from 'react'
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
    useToast,

  } from '@chakra-ui/react'

  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

  import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  let user=JSON.parse(localStorage.getItem("user"));
  const navigate=useNavigate();
  const toast=useToast();
    const [boolean,setboolean]=useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [checkedItems, setCheckedItems] = React.useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");

    const handleclick=()=>{
      // console.log(name,phone,address)
      let obj={Name:name,Phone:phone,Address:address};
      localStorage.setItem("user",JSON.stringify(obj));
        toast({
          title: "Redirecting to Home Page",
          status: "success",
          duration: 2000,
          isClosable: true,
          position:"top"
        });
        if(boolean){
            setboolean(false)
        }else{
            setboolean(true)
        }
        setTimeout(()=>{
          navigate("/")
          window.location.reload();
        },3000)
    }

    useEffect(()=>{
      console.log(user)
      if(user.Name!=""&&user.Phone!=""&&user.Address!=""){
        setAddress(user.Address);
        setName(user.Name);
        setPhone(user.Phone);
      }
    },[])
        return (
          <Box mt={20}>
            <Box display="flex">
            <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg" />

            </Box>
            <Box justifyContent="right" mb={50}>
                <Heading>Choose Address & Payment Option</Heading>

            <Box  padding="5%" border="5px solid whitesmoke" borderRadius="20px" width="50%" margin="auto"  mt={35}>
            <Button padding="5%" onClick={onOpen}>Add Address</Button>
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
                <ModalHeader>Enter your Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input ref={initialRef} placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Mobile</FormLabel>
                    <Input placeholder='Mobile Number' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Address</FormLabel>
                    <Input placeholder='Add New Address' value={address} onChange={(e)=>setAddress(e.target.value)} />
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