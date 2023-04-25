import React from 'react'
import ProductAddToCart from './AddProduct'
import {Box, Grid,Heading, VStack} from "@chakra-ui/react"
import { useContext ,useEffect,useState} from 'react'
import { AppContext } from '../Context/AuthContext'
import run_results from "./run_results.json"
import Total from './Total'
import { DeleteIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react'

const Cart = () => {
    const toast=useToast();
    const {arr,setarr,total,settotal}=useContext(AppContext);
    // console.log(arr)
    const [data,setdata]=useState([]);

    let n=0;
    settotal(data.length);
    var total2=0;
    total2 = data.reduce((acc, el) => {
        if(el.selection3!="NAN"){
            // settotal2((temp)=>temp+Number(el.selection3))
            return acc + Number(el.selection3)
       }
    }, 0);
    // console.log(total2);

    useEffect(() => {
        while(arr.length>n){
        run_results.map((el)=>{
            if(el.selection2==arr[n]){
                if(!data.includes(el)){
                    setdata((temp)=>{
                        return [...temp,el]})
                    }
                    n++;
            }
        })
    }  

    // console.log(data)
    }, [n]);

    const handleClick=(el)=>{
        // console.log(el)
        let filteredData=data.filter((item)=>{
            return item!=el;
        })
        // console.log(filteredData)
        toast({
            title: "Deleted from Cart",
            status: "success",
            duration: 2000,
            isClosable: true,
            position:"top"
          });
        setdata(filteredData);
        let tempArr=[];
        for(let i=0;i<filteredData.length;i++){
            tempArr.push(filteredData[i].selection2);
        }
        // console.log(tempArr)
        setarr(tempArr)
    }

  return (
    <div>
        {/* <h1>Cart</h1> */}
        {/* <ProductAddToCart /> */}
        {/* <Grid templateColumns='repeat(1, 1fr)' gap={6} mt={5}> */}
        {data.map((e)=>(
            <VStack key={e.url} gap={5} mb={5}> 
                {/* {settotal(total+1)} */}
                <Box ml="90%" >
                    <DeleteIcon boxSize={6} cursor="pointer" onClick={()=>handleClick(e)} ></DeleteIcon>
                </Box>
                <img  src={e.image} alt="product" />
                <Heading size="md" as="h4"> {e.selection2}</Heading>
                <Heading size="md" as="h4">Price: &#8377;{e.selection3}</Heading>
            </VStack>
        ))}
         <Heading color="gray.700" size="lg" >Grand Total: </Heading>
        <Heading color="gray.800" size="lg" > &#8377; {total2}</Heading>
        {/* <Total data={data}/> */}
    
      {/* </Grid> */}
    </div>
  )
}

export default Cart