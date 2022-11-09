import { Spacer,Stack,Box,Image,H1, Heading } from '@chakra-ui/react'
import React from 'react'
import Gallery1 from "./carousel1"
import Gallery2 from './carousel2'
// const mdiHome = require('@iconify/icons-mdi/home');
const Home = () => {
  return (
    <Box backgroundColor="whitesmoke" >
        <Gallery1 />
        <Spacer />
        <Spacer/>
        <Box display="flex" mt="50"  mb="50" alignItems="center">
          <Image ml="150" width="80%" src="https://images-static.nykaa.com/uploads/a47a4ec4-140c-4035-8b85-629db661a638.jpg?tr=w-1200,cm-pad_resize" alt="" />

        </Box>
        <Gallery2 />
        <Heading as="h1" size="lg" >TOP BRANDS</Heading>

    </Box>
  )
}

export default Home