import React from 'react'

export default function Features() {
    const data=[
        {
            img:"diagram.png",
            title:"Growing Revenue",
            para:"Start with singing up Refersion for free. Refersion will set."
        },
        {
            img:"check.png",
            title:"Best in Class Content",
            para:"Start with singing up Refersion for free. Refersion will set."
        },
        {
            img:"badge (2).png",
            title:"Competitive Advantage",
            para:"Start with singing up Refersion for free. Refersion will set."
        },
        {
            img:"growth-chart.png",
            title:"Growth Potential",
            para:"Start with singing up Refersion for free. Refersion will set."
        }
    ];
  return (
    <div  className=' kain p-4 mt-4 flex flex-wrap justify-around'>
        {
     data.map((i)=>(
        <div className=' w-80 m-3 p-2 '>
            <div className=''>
            <img  className=' rounded-md  bg-yellow-300  p-1 ml-1 w-10 m-2' src={i.img} alt="" />
            </div>
            <p className=' my-2 font-bold'>{i.title}</p>
            <p>{i.para}</p>
        </div>
     ))
}

    </div>
    
  )
}
