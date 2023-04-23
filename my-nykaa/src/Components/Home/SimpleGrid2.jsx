import React from 'react'
import {SimpleGrid,Box,Image,Heading, position,Text} from "@chakra-ui/react"


const SimpleGridExample2 = () => {
    
    const style1={position:"absolute",top:"80%" ,left:"12%",bg:"white",borderRadius:"5px",padding:"1%" }
    const style2={position:"absolute",top:"80%" ,left:"10%",bg:"white",borderRadius:"5px",padding:"1%" }
    const style3={position:"absolute",top:"79%" ,left:"12%",bg:"white",borderRadius:"5px",padding:"1%" }
    const style4={position:"absolute",top:"80%" ,left:"10%",bg:"white",borderRadius:"5px",padding:"1%" }
    const style5={position:"absolute",top:"80%" ,left:"12%",bg:"white",borderRadius:"5px",padding:"1%" }
    const style6={position:"absolute",top:"80%" ,left:"10%",bg:"white",borderRadius:"5px",padding:"1%" }
  return (
    <SimpleGrid
    w="90%"
    m="auto"
    minChildWidth={["300px","450px"]}
    spacing="60px"
    marginTop="30px"
    textAlign="center"
    padding="2%"
  >
        <Box boxShadow='2xl' rounded="md" position="relative">
        <Image w="100%" src="https://images-static.nykaa.com/uploads/8cd89b62-d26d-487e-a6d5-ff3d11abd416.jpg?tr=w-600,cm-pad_resize" />
        <Box display={{xl:"block",base:"none"}} bg="white" width="80%"  style={style1} margin="auto">
            <Text color="pink.400" fontSize="130%">Flat 20% Off + Free Lip Liner on Rs.1399</Text>
        </Box>
        </Box>
        <Box boxShadow='2xl' rounded="md" position="relative">
        <Image w="100%" src="https://images-static.nykaa.com/uploads/4dbcf6cc-a457-4ffb-a017-d853f063642e.jpg?tr=w-600,cm-pad_resize" />
        <Box display={{xl:"block",base:"none"}} bg="white" width="80%"  style={style2} margin="auto">
            <Text color="pink.400" fontSize={20}>Upto 30% Off On Best Sellers</Text>
        </Box>
        </Box>
        <Box boxShadow='2xl' rounded="md" position="relative">
        <Image w="100%" src="https://images-static.nykaa.com/uploads/2e52e313-3cbe-41a8-86bd-0c3a9c7506e5.jpg?tr=w-600,cm-pad_resize" />
        <Box display={{xl:"block",base:"none"}} bg="white" width="80%"  style={style3} margin="auto">
            <Text color="pink.400" fontSize={20}>Upto 30% Off Expert Skincare Validated</Text>
        </Box>
        </Box>
        <Box boxShadow='2xl' rounded="md" position="relative"> 
        <Image w="100%" src="https://images-static.nykaa.com/uploads/7c121349-cf97-4c5d-83cd-d8fe9214c39b.jpg?tr=w-600,cm-pad_resize" />
        <Box display={{xl:"block",base:"none"}} bg="white" width="80%"  style={style4} margin="auto">
            <Text color="pink.400" fontSize={20}>Upto 30% Off + Free Perfume</Text>
        </Box>
        </Box>
    </SimpleGrid>
  )
}

export default SimpleGridExample2;