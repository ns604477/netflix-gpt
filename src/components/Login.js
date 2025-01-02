import React, { useRef, useState } from 'react'
import Header from './Header'
import{checkValidData} from "../utils/validate"
const Login = () => {

  const [isSignInForm,SetIsSignForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null)
  const email=useRef(null);
  const password=useRef(null)
   const handleButtonClick = () =>{
    //validatte the form data
   
    console.log(email.current.value)
    console.log(password.current.value)
    const message=  checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)
 }
  const toggleSignInForm=()=>{

    SetIsSignForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 p-12 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
      {!isSignInForm &&< input type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-800' />}
        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
        <input ref={password} type="password" placeholder='password' className='p-4 my-4 w-full bg-gray-800' />
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button className='p-4 my-4 bg-red-800 w-full rounded-lg' onClick={handleButtonClick}> {isSignInForm ? "Sign In":"Sign Up"} </button>
        <p className='py-4 cursor-pointer'onClick={toggleSignInForm}> {isSignInForm ? "New to Nerflix ? Sign Up Now":"Already Registerd ?Sign In Now..."}</p>
      </form>
    </div>
  )
}

export default Login
