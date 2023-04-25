import React from 'react'
import { useEffect,useContext,useState } from 'react';
import { AppContext } from '../Context/AuthContext';
import {Heading} from "@chakra-ui/react"

const Total = ({data}) => {
    const {total,settotal}=useContext(AppContext)
    console.log(data,data.length)
    
    const [refresh,setres]=useState(false);
//Total 2 is for calculating total pricing  
    const [total2,settotal2]=useState(0);
    useEffect(() => {
      settotal(data.length);
        data.map((cal)=>{
            if(cal.selection3!="NAN"){
                 settotal2((temp)=>temp+Number(cal.selection3))

            }
        })
        // console.log(total)
    }, [data.length]);
    console.log(total2);
    // useEffect(()=>{

    // },[refresh,total])
    // console.log(data)
    // console.log(total)

  return (
    <div>
        <Heading color="gray.700" size="lg" >Grand Total: </Heading>
        <Heading color="gray.800" size="lg" > &#8377; {total2}</Heading>
    </div>
  )
}

export default Total