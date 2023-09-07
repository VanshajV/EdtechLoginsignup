import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { reload, signOut } from 'firebase/auth';

export default function Navbar(props) {
    const[show,setShow]=useState(false);
    
    const navigate= useNavigate();
    function sho(){
        setShow(!show);
      }
      function sho2(){
        console.log(auth);
        signOut(auth).then(() => {
            console.log("successful")
            alert("Logged Out Successfully")
            navigate("/login");
          }).catch((error) => {

          });
          
        
      }

  return (
    <div className=' kain h-14 z-40  sticky top-0 bg-white flex px-10 items-center justify-between py-8  shadow-2xl '>
        
            <div className='flex items-center order-2 md:order-1'>
                <p className=' block  font-semibold text-3xl'>Educate</p>
                <div className='hidden md:block ml-5'>
                <div className='flex items-center space-x-1 '>
                    <img className='w-5' src="open-book (1).png" alt="" />
                    <p>Our All courses</p>
                </div>
                </div>
            </div>
             <div className='hidden md:block  md:order-2'>
                <div className='flex items-center'>
                    <ul className='flex space-x-5  items-center'>
                        <li>About</li>
                        <li> Studying Process </li>
                        <li> Blog</li>
                        <li>Contact</li>
                        {
                    auth.currentUser!==null ? (""):<Link to='/Register'><li className=' px-2  border-[1px] border-black shadow-black  bg-yellow-300 rounded-sm'>Register Now!</li></Link>
                }
                        
                    </ul>
                    
                </div>
            </div>
            <div className='order-3 flex space-x-2 items-center'>
                
                
                
                {
                    auth.currentUser!==null ? (<><button className=' mr-2 text-white hover:bg-[#fbc410] px-2 p-1  border-[1px] border-black shadow-black  bg-red-500 rounded-sm' onClick={sho2}>Logout</button>
                    <img className='w-8' src="account.png" alt="" />
                <span className='text-lg  font-semibold  '>{props.name}</span>
                    
                   </> ) : <Link className=' hover:bg-yellow-500 px-2 p-1  border-[1px] border-black shadow-black  bg-yellow-400 rounded-sm mr-3 ' to="/Login"> Login!</Link>
                  
                }
                </div>
                <div onClick={sho} className={`md:hidden order-1 `}>
                    <img className="w-7" src={show? 'x (2).png':'hamburger.png'} alt="" />
                </div>
                <div  id="nav" className={` border-2 border-black z-50 md:hidden  p-5 fixed top-3 bg-white rounded-b-md ${show ?'left-0 top-[63px]':'top-[63px] -left-56'}`}>
                <ul className=''>
                        <li className='ml-2'>About</li>
                        <li className='ml-2'> Studying Process </li>
                        <li className='ml-2'> Blog</li>
                        <li className='ml-2'>Contact</li>
                        {
                    auth.currentUser!==null ? (""):<Link to='/Register'><li className=' px-2  border-[1px] border-black shadow-black  bg-yellow-300 rounded-sm'>Register Now!</li></Link>
                }
                    </ul>
                </div>

       
        
    </div>
  )
}
