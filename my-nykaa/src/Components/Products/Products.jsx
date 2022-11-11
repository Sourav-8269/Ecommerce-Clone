import React from 'react'
import run_results from "./run_results.json"
import ProductAddToCart from './AddProduct';

import { useEffect } from 'react';
const Products = () => {
    useEffect(() => {
        console.log(run_results)
        
    }, []);
  return (
    <div>
      {run_results.map((el)=>(
         <ProductAddToCart key={el.selection2} title={el.selection2}  image={el.image} />
        // <div key="el.image">
        //   <p>{el.selection2}</p>
        //   <img src={el.image} alt="" />
        // </div>
      ))}
    </div>
  )
}

export default Products