import React from 'react'
import download from '../src/assets/download.jpg'
import plus from '../src/assets/plus.png'

const Singlesongs = () => {
  return (
     <div className='pb-20'>
             <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold  pl-10 pt-10 pb-10 text-white">Single <span className="text-pink-600">Songs</span></h1>
             <div className='flex flex-row gap-10 justify-center items-center'>
               <div className='bg-neutral-700 p-3 rounded-[5px] flex flex-col'>
               <img src={download} alt="" className='w-40 h-40 rounded-[10px]'/>
               <div className='text-white'>
                   <h3>name</h3>
               </div>
               </div>
               <div>
               <button className='text-white bg-neutral-700 rounded-[50%] p-5 cursor-pointer'>
                   <img src={plus} alt="" className='w-5 h-5' />
               </button>
               <p className='text-white font-bold'>View All</p>
               </div>
               
             </div>
           </div>
  )
}

export default Singlesongs


