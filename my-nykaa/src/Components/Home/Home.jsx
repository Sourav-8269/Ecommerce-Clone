import { Spacer,Stack,Box,Image,H1, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import Products from '../Products/Products'
import ProductAddToCart from "../Products/AddProduct"
import Signin from '../Signin'
import Gallery1 from "./carousel1"
import Gallery2 from './carousel2'
import Gallery3 from './carousel3'
import Gallery4 from './carousel4'
import Logo from './Footer'

import SimpleGridExample1 from './SimpleGrid1'
import SimpleGridExample2 from './SimpleGrid2'
import Cart from '../Products/Cart'
import { AppContext } from '../Context/AuthContext'
// const mdiHome = require('@iconify/icons-mdi/home');


const Home = () => {
 
  return (
    <Box bg="whitesmoke">
      <Box mt={["17%","12%","6%"]} >
        <Gallery1 />
      </Box>
        <Spacer />
        <Spacer/>
        <Box display="flex" mt="50"  mb="50" justifyContent="center" >
          <Image  width={["90%","80%"]}  src="https://images-static.nykaa.com/uploads/a47a4ec4-140c-4035-8b85-629db661a638.jpg?tr=w-1200,cm-pad_resize" alt="" />

        </Box>
        <Gallery2 />
        <Heading as="h5" size="lg" mt="50" mb="30" fontWeight="400" color="blackAlpha.700" > TOP BRANDS</Heading>
        <SimpleGridExample1/>

        <Gallery3/>
        <Heading as="h5" size="lg" mt="50" mb="30" fontWeight="400" color="blackAlpha.700" >ONLY AT NYKAA</Heading>
        <SimpleGridExample2/>
        <Box bg="#fbe2e8" p="2%" >
          <img  src="https://images-static.nykaa.com/uploads/6892016b-f17f-4ddb-b463-452ef88fc8d6.png?tr=w-1200,cm-pad_resize" alt="" />
        <Gallery4/>
        </Box>
        <Box mt={10} mb={10} display="flex" justifyContent="center">
          <img src="https://images-static.nykaa.com/uploads/58c1c0b0-5a0b-4614-acfc-3205e669d8a7.jpg?tr=w-1200,cm-pad_resize" alt="" />

        </Box>
        {/* <Cart/> */}
        <Logo/>
        {/* <Products/> */}
       
    </Box>
  )
}

export default Home