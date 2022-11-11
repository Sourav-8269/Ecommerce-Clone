import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Home/Home';
import SimpleCard from '../Signin';
import SignupCard from "../Signup"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<SimpleCard/>}/>
        <Route path="/signup" element={<SignupCard/>}/>
    </Routes>
  )
}

export default AllRoutes;