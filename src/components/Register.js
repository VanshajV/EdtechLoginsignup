import React, { useState } from 'react'
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";

import { auth } from '../firebase';
import { FirebaseError } from 'firebase/app';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
export default function Register() {
  const navigate= useNavigate();
  const[values,setValues]=useState({
    name:"",
    email:"",
    password:"",
  });
  
  const[errormsg,setErrormsg]=useState("");
  const Changeemail=(e)=>{
    setValues((prev)=>({...prev,email: e.target.value}));
    
  };
  const Changename=(x)=>{
    setValues((prev)=>({...prev,name: x.target.value}));
   
  };

  const Changepass=(y)=>{
    setValues((prev)=>({...prev,password: y.target.value}));
    
    
  };
   

  const submit=(e)=>{
    if(!values.name || !values.email || !values.password){
      setErrormsg("Fill all details please!")
      return;
    }
    setErrormsg("");
    createUserWithEmailAndPassword(auth,values.email,values.password).then(async(res)=>{
      const user= res.user;
     await updateProfile(user,{displayName:values.name})
      navigate("/");
      window.location.reload();
      
    })
    .catch((err)=>{console.log("error=",err.message);
    setErrormsg(err.message)
});
    

  }


  


  return (
    <>
    <div id="register" className=' flex justify-center items-center h-[100vh] bg-gray-200'>
        <div className=' px-2 w-[400px]  bg-white  border-[1px] border-black rounded-xl h-[450px]'>
        <h1 className='text-3xl text-center mt-6'>Sign Up</h1>
        
        
        
        <div className=' flex flex-col justify-center items-center reg space-y-3 mt-5'>
            <input className='p-3' type="email" name="" id="x" placeholder='Email' onChange={Changeemail}/>
            <input className='p-3 ' type="text" placeholder='Name' onChange={Changename}/>
            <input className='p-3' type="password" name="" id="yn" placeholder='Password'onChange={Changepass}/>
            <button onClick={submit} className=' hover:bg-yellow-300 w-[80%] font-bold block bg-[#FFC229] p-1 rounded-md'>Register</button>
            <b className='font-bold  text-center text-sm text-red-500'>{errormsg}</b>
            <p className=' mt-2 text-md text-center'>Already Registered? <Link className=" hover:underline font-bold text-blue-800" to='/Login'>Login</Link></p>
        </div>
        <div className='mt-5 h-[1px] bg-gray-500'></div>
        <p className=' mt-2 text-xs text-center'>By Clicking Register, you agree to our <a className=" hover:underline font-bold text-blue-800" href='/'>Privacy Policy</a></p>
        
        </div>

    </div>
    </>
  )
}
