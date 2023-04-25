import React from 'react'
import run_results from "./run_results.json"
import ProductAddToCart from './AddProduct';

import { useEffect,useContext } from 'react';
import { Grid,SimpleGrid } from '@chakra-ui/react';
import { AppContext } from '../Context/AuthContext';
import { useToast } from '@chakra-ui/react';

const Products = () => {
  const toast=useToast();

    useEffect(() => {
        // console.log(run_results)
        
    }, []);
    const {arr,setarr}=useContext(AppContext);
    // console.log(arr)
    const handleclick=(val)=>{
      // console.log(val)
      // console.log("clicked")
      toast({
        title: "Added to Cart",
        status: "success",
        duration: 2000,
        isClosable: true,
        position:"top"
      });
      setarr([...arr,val])
      // console.log(arr)
  }
  return (
    <div>
      <SimpleGrid
      mt={5}
                minChildWidth="350px"
                spacing="40px"
                marginTop="30px"
                textAlign="center"
                border="0px solid red"
              >
      {run_results.map((el)=>(
         <ProductAddToCart key={el.selection2} title={el.selection2} price={el.selection3}  image={el.image} click={handleclick}   />
      ))}
      </SimpleGrid>
    </div>
  )
}

export default Products