import React from 'react'
import { createContext,useState } from 'react'

export const AppContext=createContext();

const AuthContextProvider = ({children}) => {
    const [isAuth,setAuth]=useState(false);
    const [email,setemail]=useState(null);
    const [pass,setpass]=useState(null);

    const login=(email,password)=>{
        setAuth(true);
        setemail(email)
        setpass(password);
    }
    const logout=()=>{
        setAuth(false);
        setemail(null);
        setpass(null);
    }
    const value={isAuth,login,logout,email,pass};
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

export default AuthContextProvider;