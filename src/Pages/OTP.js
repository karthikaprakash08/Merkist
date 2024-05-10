import React, { useContext, useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../Context/UserContext'

function OTP() {

  let[isEmpty, setIsEmpty] = useState(true);
  let[isValid, setIsValid] = useState(true);
  let[isCorrect, setIsCorrect] = useState(true);

  const Context = useContext(UserContext);
  const navigate = useNavigate();

  function verifyOTP(){
    var otp = document.getElementById("otp").value;
    if(isValid && isEmpty){
    if(Context.OTP==otp){
      setIsCorrect(true)
      navigate('/FullDetails')
    }
    else{
      setIsCorrect(false)
    }
  }
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Enter Your OTP</h2>
            <br/>
            <p style={{fontWeight:"600"}}>Your OTP has been send to {Context.Email}</p>
            <div className="input-field">
            <FontAwesomeIcon icon={faKey} className='i' />
              <input type="otp" id='otp' placeholder="OTP" onChange={(event)=>{
                const otpRegex = /[0-9]{6}$/;
                setIsCorrect(true)
                if(event.target.value!=""){
                  setIsEmpty(true)
                if(otpRegex.test(event.target.value)){
                    setIsValid(true)
                }
                else{
                    setIsValid(false);
                }
              }
              else{
                setIsEmpty(false)
                setIsValid(true)
              }
            }}/>
            </div>
            {!isEmpty && (
              <div className="invalid-feedback" style={{display:"block", fontWeight:"600", paddingLeft:"160px"}}>
              Please enter your OTP.
              </div>
          )}
          {!isValid && (
              <div className="invalid-feedback" style={{display:"block", fontWeight:"600", paddingLeft:"160px"}}>
              OTP MUST BE 6 DIGITS LONG AND ONLY CONTAIN NUMBERS.
              </div>
          )}
          {!isCorrect && (
              <div className="invalid-feedback" style={{display:"block", fontWeight:"600", paddingLeft:"160px"}}>
              Your OTP is incorrect, Try Again
              </div>
          )}
            <input type="submit" value="Login" onClick={(e)=>{
              e.preventDefault();
              verifyOTP()
            }} className="btn btn2 solid" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content" style={{marginBottom:"20px"}}>
            <h3>New here ?</h3>
            <p>
            Join us in our new venture of learning about your business.
            </p>
            <Link to={"../Login"}><button className="btn btn2 transparent" id="sign-up-btn btn2">
              Sign up
            </button></Link>
          </div>
          <img src="otp.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default OTP