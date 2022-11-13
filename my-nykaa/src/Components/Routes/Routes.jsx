import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Home/Home';
import Products from '../Products/Products';
import SimpleCard from '../Signin';
import SignupCard from "../Signup"
import DrawerExample from '../Drawer';
import Checkout from '../Products/Checkout';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<SimpleCard/>}/>
        <Route path="/signup" element={<SignupCard/>}/>
        <Route path="/categories" element={<Products/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        {/* <Route path="/categories" element={<DrawerExample/>}/> */}
    </Routes>
  )
}

export default AllRoutes;