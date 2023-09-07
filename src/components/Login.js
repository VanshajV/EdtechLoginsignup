import React, { useState } from 'react'
import {signInWithEmailAndPassword,updateProfile} from "firebase/auth";

import { auth } from '../firebase';
import { FirebaseError } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const navigate= useNavigate();
  const[values,setValues]=useState({
    email:"",
    password:"",
  });
  
  const[errormsg,setErrormsg]=useState("");
  const Changeemail=(e)=>{
    setValues((prev)=>({...prev,email: e.target.value}));
  };
  

  const Changepass=(y)=>{
    setValues((prev)=>({...prev,password: y.target.value}));
    
    
  };
   

  const submit=(e)=>{
    
    if(!values.email || !values.password){
      setErrormsg("Fill all details please!")
      return;
    }
    setErrormsg("");
    signInWithEmailAndPassword(auth,values.email,values.password).then(async(res)=>{
     navigate("/");
    })
    .catch((err)=>{console.log("error=",err.message);
    setErrormsg(err.message)
});
    

  }


  
  return (
    <div>
    
    <div id="register" className=' flex justify-center items-center h-[100vh] bg-gray-200'>
        
    <div className=' px-6 w-[400px]  bg-white  border-[1px] border-black rounded-xl h-[400px]'>
    
    <h1 className='text-3xl text-center mt-10'>Login</h1>

    <div className=' flex flex-col justify-center items-center reg space-y-3 mt-5'>
       
        <input className='p-3' type="email" name="email" placeholder='Email' onChange={Changeemail}/>
        <input className='p-3' type="password" name="password" placeholder='Password' onChange={Changepass}/>
        <button onClick={submit} className=' w-[80%] font-bold block bg-[#FFC229] hover:bg-yellow-300 p-1 rounded-md'>Login</button>
        <b className='font-bold  text-center text-sm text-red-500'>{errormsg}</b>
    </div>

    <div className='mt-5 h-[1px] bg-gray-500'></div>
    <p className=' mt-2 text-md text-center'>New to educate? <a className=" hover:underline font-bold text-blue-800" href='/Register'>SignUp here</a></p>
    </div>
    
</div>
</div>
  )
}
