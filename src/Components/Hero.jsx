import React from 'react'
import CheeseLady from "../assets/CheeseLady.png"
import SpagLady from "../assets/SpagLady.png"
import Order1 from "../assets/Order1.png"
import Notification from "../assets/Notification.png"
import '../assets/Hero.css'
const Hero = () => {
  return (
    <div className='flex '>
        <div className="bg-[#FBFBFB] p-[10px]  m-[20px] flex justify-between  ">
         
         <div className="">
         <p className="text-[#03081F] p-[10px] text-[1.5rem]">Order Restaurant food, takeaway and groceries.</p>
            <h3 className="text-[#03081F] font-bold text-[4rem] capitalize p-[5px]">
                Feast Your Senses,
                <span className="text-[#FC8A06] block">Fast and Fresh</span>
                </h3>
            <p className="text-[#03081F] p-[10px]">Enter a postcode to see what we deliver</p>
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden max-w-md">
            <input 
                type="text" 
                placeholder="Search..." 
                className="px-4 py-2 w-full focus:outline-none "
            />
            <button className="bg-[#FC8A06 <div classNamGGe="box"></div>
            <img src={CheeseLady} alt="" />
            <img src={SpagLady} alt="" />
            <img src={Notification} alt="" />
        </div>
    </div>
  )
}

export default Hero