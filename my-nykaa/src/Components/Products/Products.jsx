import React from 'react'
import run_results from "./run_results.json"
import ProductAddToCart from './AddProduct';

import { useEffect,useContext } from 'react';
import { Grid } from '@chakra-ui/react';
import { AppContext } from '../Context/AuthContext';
const Products = () => {
    useEffect(() => {
        // console.log(run_results)
        
    }, []);
    const {arr,setarr}=useContext(AppContext);
    // console.log(arr)
    const handleclick=(val)=>{
      // console.log(val)
      console.log("clicked")
      setarr([...arr,val])
      // console.log(arr)
  }
  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={5}>
      {run_results.map((el)=>(
         <ProductAddToCart key={el.selection2} title={el.selection2}  image={el.image} click={handleclick}   />
        // <div key="el.image">
        //   <p>{el.selection2}</p>
        //   <img src={el.image} alt="" />
        // </div>
      ))}
      </Grid>
    </div>
  )
}

export default Products