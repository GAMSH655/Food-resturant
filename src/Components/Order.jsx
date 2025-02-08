import React from 'react'
import Couples from "../assets/Couples.png"
import Logo from "../assets/Logo.png"
import Store from "../assets/Store.png"
const Order = () => {
  return (
    <div>
       <div className="p-[0px] m-[0px] md:m-[50px] bg-[#A6A6A6] flex flex-wrap-reverse md:justify-evenly rounded-md ">
        <img src={Couples} alt="" className='size-full md:size-1/2'  draggable="false" />
        
        <div className="mt-[50px]">
        <div className="flex items-center justify-center">
            <img src={Logo} alt="" className=' w-1/4 md:w-auto'   />
            <span className='font-bold text-[2rem] md:text-[4rem] text-[#03081F]'>ing</span>
             <span className='text-[#03081F] font-bold text-[2.5rem] p-[5px]'>is more</span>
        </div>
       <div className="p-[4px] md:p-[9px] bg-transparent md:bg-[#03081F] rounded-full ">
        <h3 className="font-semibold text-[2rem] text-[#FC8A06] ml-[15px] underline capitalize">
            personalised 
            <span className="text-white">  & instant </span>
        </h3>
       </div>
       <p className="text-[#03081F] text-xl m-5">
       Download the Order.uk app for faster ordering
       </p>
       <img src={Store} alt="" className="" />
       </div>
       </div>
    </div>
  )
}

export default Order