import React from 'react'
import {SimpleGrid,Box,Image,Heading, position,Text} from "@chakra-ui/react"


const SimpleGridExample1 = () => {
    
    const style1={position:"absolute",top:"80%" ,left:"12%",bg:"white",width:"80%",borderRadius:"5px",padding:"1%" }
    const style2={position:"absolute",top:"80%" ,left:"10%",bg:"white",width:"80%",borderRadius:"5px",padding:"1%" }
    const style3={position:"absolute",top:"79%" ,left:"12%",bg:"white",width:"80%",borderRadius:"5px",padding:"1%" }
    const style4={position:"absolute",top:"80%" ,left:"10%",bg:"white",width:"80%",borderRadius:"5px",padding:"1%" }
    const style5={position:"absolute",top:"80%" ,left:"12%",bg:"white",width:"80%",borderRadius:"5px",padding:"1%" }
    const style6={position:"absolute",top:"80%" ,left:"10%",bg:"white",width:"80%",borderRadius:"5px",padding:"1%" }
  return (
    <SimpleGrid columns={2} spacing={10} width="80%" margin="auto" marginBottom="5%">
        <Box boxShadow='2xl' rounded="md" position="relative">
        <Image position="" src="https://images-static.nykaa.com/uploads/75223f87-05e2-4df2-97e2-fb5aa810e68d.jpg?tr=w-600,cm-pad_resize" />
        <Box bg="white" width="10%"  style={style1} margin="auto">
            <Text color="pink.400" fontSize="130%">Flat 20% Off + Free Lip Liner on Rs.1399</Text>
        </Box>
        </Box>
        <Box boxShadow='2xl' rounded="md" position="relative">
        <Image src="https://images-static.nykaa.com/uploads/81a498f9-7e68-4a91-b06c-2f0a8ddc65d5.jpg?tr=w-600,cm-pad_resize" />
        <Box bg="white" width="10%"  style={style2} margin="auto">
            <Text color="pink.400" fontSize={20}>Upto 30% Off On Best Sellers</Text>
        </Box>
        </Box>
        <Box boxShadow='2xl' rounded="md" position="relative">
        <Image src="https://images-static.nykaa.com/uploads/a8a8ea5d-f1e6-4da6-a917-f717179ac034.jpg?tr=w-600,cm-pad_resize" />
        <Box bg="white" width="10%"  style={style3} margin="auto">
            <Text color="pink.400" fontSize={20}>Upto 30% Off Expert Skincare Validated</Text>
        </Box>
        </Box>
        <Box boxShadow='2xl' rounded="md" position="relative"> 
        <Image src="https://images-static.nykaa.com/uploads/1ce2fd26-9ad5-44ba-9099-f9b44f59cc2d.jpg?tr=w-600,cm-pad_resize" />
        <Box bg="white" width="10%"  style={style4} margin="auto">
            <Text color="pink.400" fontSize={20}>Upto 30% Off + Free Perfume</Text>
        </Box>
        </Box>
        <Box boxShadow='2xl' rounded="md" position="relative">
        <Image src="https://images-static.nykaa.com/uploads/7e705e04-98af-4d79-9a4c-eb2ce2e9c408.jpg?tr=w-600,cm-pad_resize" />
        <Box bg="white" width="10%"  style={style5} margin="auto">
            <Text color="pink.400" fontSize={20}>Upto 30% Off On Makeup Must-Haves!</Text>
        </Box>
        </Box>
        <Box boxShadow='2xl' rounded="md" position="relative">
        <Image src="https://images-static.nykaa.com/uploads/c619ceb6-7e8e-4370-9961-bfdad63439e2.jpg?tr=w-600,cm-pad_resize" />
        <Box bg="white" width="10%"  style={style6} margin="auto">
            <Text color="pink.400" fontSize={20}>Explore Luxe New Launches</Text>
        </Box>
        </Box>
    </SimpleGrid>
  )
}

export default SimpleGridExample1;