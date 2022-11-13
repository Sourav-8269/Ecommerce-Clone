import React from 'react'
import ProductAddToCart from './AddProduct'
import {Grid,Heading, VStack} from "@chakra-ui/react"
import { useContext ,useEffect,useState} from 'react'
import { AppContext } from '../Context/AuthContext'
import run_results from "./run_results.json"
import Total from './Total'

const Cart = () => {
    const {arr,setarr,total,settotal}=useContext(AppContext);
    // console.log(arr)
    const [data,setdata]=useState([]);

    const[boolean,setboolean]=useState(false)
    let n=0;
    useEffect(() => {
        while(arr.length>n){
        run_results.map((el)=>{
            if(el.selection2==arr[n]){
                setdata((temp)=>{
                    return [...temp,el]})
                n++;
            }
        })
    }  

    // const cleanup = () => {
    //     data.map((cal)=>{
    //         return settotal((temp)=>temp+cal.selection3)
    //     })
    //     // clearInterval(timer);
    //     // console.log("cleanup is called");
    //     return;
    // };
    //   return cleanup;
    // console.log(n)
    // console.log(arr)
    console.log(data)
    }, [n]);

    // const [total,settotal]=useState(0);
    // useEffect(()=>{
    //     data.map((cal)=>{
    //         settotal(total+cal.selection3)
    //     })
    //     console.log(total)
    // },[n])
    // console.log(total)
    // useEffect(()=>{
    //     data.map((cal)=>{
    //         if(cal.selection3){
    //              settotal((total)=>total+Number(cal.selection3))
    
    //         }
    //     })
    //     console.log(total)
    // },[])
  return (
    <div>
        {/* <h1>Cart</h1> */}
        {/* <ProductAddToCart /> */}
        {/* <Grid templateColumns='repeat(1, 1fr)' gap={6} mt={5}> */}
        {data.map((e)=>(
            <VStack key={e.url} gap={5} mb={5}> 
                {/* {settotal(total+1)} */}
                <img  src={e.image} alt="" />
                <Heading size="md" as="h4">Name: {e.selection2}</Heading>
                <Heading size="md" as="h4">Price: {e.selection3}</Heading>
            </VStack>
        ))}
        <Total data={data}/>
    
      {/* </Grid> */}
    </div>
  )
}

export default Cart