import React from 'react'

export default function Main() {
  return (
    <div className='kain flex flex-col md:flex-row'>
        <div className='bg-[#20da91] h-[500px] md:w-[50%] px-7 md:px-10 py-5 flex items-center'>
        <div className=''>
            <p id="main1" className='relative'>
                Keep learning & unlock the power of your brain
            </p>
           <p className='font-semibold'>
                To apply for our affliate program, start with signing up with Refersion for free. Refersion will set you up!
            </p>
            <div className=' mt-7 flex justify-center'>
              <div className=''>
              <input className='  outline-none border-s-2 border-y-2 border-black p-2 rounded-s-md' placeholder='Search any course'></input>
              <button className=' hover:bg-[#fbcc10] border-e-2  border-y-2 border-black p-2 rounded-e-md bg-[#F8FE5E]'>Search Now</button>
              </div>
            </div>
            </div>
            
        </div>
        
        <div id="bibi" className=' relative bg-contain bg-center  bg-no-repeat h-[500px] md:w-[50vw] bg-[#c79bfc] '>
         <div className='top-2 md:top-80 left-3 absolute shadow-lg shadow-black flex flex-col justify-center text-center r w-36 h-36 bg-[#FFC229]'><p className='font-extrabold text-3xl'>500+</p><span>Free Lessons For Students</span></div>
         <div className='  rounded-3xl md:top-5  p-2 s left-4 bottom-10 absolute shadow-lg shadow-black flex flex-col justify-center text-center  w-42 h-20 bg-[#6BECFF]'><p className='font-extrabold text-3xl'>1K+</p><span>Students world wide</span></div>
         <div className='r right-5 bottom-3 md:right-5 md:top-10   absolute shadow-lg shadow-black flex flex-col justify-center text-center  w-36 h-36 bg-[#5DFEB2]'><p className='font-extrabold text-3xl '>100K</p><span>Active Students in Our Courses</span></div>
        </div>
    </div>
  )
}
