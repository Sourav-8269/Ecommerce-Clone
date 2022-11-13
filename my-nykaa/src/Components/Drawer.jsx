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
    Box,
    Heading

  } from '@chakra-ui/react'
  import React from 'react'
import Cart from './Products/Cart'
import Products from './Products/Products'
import {useContext,useState,useEffect} from "react";
import {AppContext} from "./Context/AuthContext"
import { useNavigate ,Link} from 'react-router-dom';

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    const navigate=useNavigate();
    const {arr,setarr,total}=useContext(AppContext);
    const [loading,setloading]=useState(true);

    useEffect(() => {
      if(arr.length==0){
        setloading(true);
      }else{
        setloading(false);
      }
      
    }, [arr]);

    // const handleclick=()=>{
    //   navigate
    // }

    // useEffect(()=>{
    //   console.log(total)
    //   alert(total)
    // },[])
    
  
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
              {!loading&&<Heading>Total: {total}</Heading>}
              {loading && <Image borderRadius="100%" width="100%" height="250px" src="https://image.shutterstock.com/image-photo/paper-shopping-bag-on-pink-260nw-1993807145.jpg" />}
              {loading&&<Heading textAlign="center" size="lg">Your Shopping Bag is empty</Heading>}
      
              <Cart />
              {/* <Products/> */}
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Link to="/checkout">
              <Button colorScheme='blue' >Proceed</Button>
              </Link>

            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </Box>
      </>
    )
  }
  export default DrawerExample;