import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import Login from '../Pages/Login';

const UserContext = createContext({Email:"",OTP:"",CompanyName:"", setCompanyName:undefined, isLoggedIn:false, LetsGoEmail:undefined, LoginHandler:undefined, LogoutHandler:undefined, SendOTP:undefined});

export function UserContextProvider(props) {

    let[Email, setEmail] = useState("");
    let[CompanyName, setCompanyName] = useState("");
    let[OTP, setOTP] = useState("");
    let[isLoggedIn,updateisLoggedIn] = useState(false)

    function LetsGoEmail(Email){
        setEmail(Email);
    }

    function SendOTP(OTP){
        setOTP(OTP);
    }

    function LoginHandler(){
        updateisLoggedIn(true);
    }

    function LogoutHandler(){
        updateisLoggedIn(false);
    }

  return (
    <UserContext.Provider value={{Email:Email, OTP:OTP,CompanyName:CompanyName, setCompanyName:setCompanyName, isLoggedIn:isLoggedIn, LetsGoEmail:LetsGoEmail, LoginHandler:LoginHandler, LogoutHandler:LogoutHandler, SendOTP:SendOTP}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserContext