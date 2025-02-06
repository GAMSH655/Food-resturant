import React from 'react'
import CheeseLady from "../assets/CheeseLady.png"
import SpagLady from "../assets/SpagLady.png"
import Order1 from "../assets/Order1.png"
import Notification from "../assets/Notification.png"
import '../assets/Hero.css'
const Hero = () => {
  return (
    <div className="block md:flex md:justify-between bg-[#FBFBFB] m-[0px] md:m-[30px] rounded-md shadow-md overflow-hidden">
    {/* Left Content */}
    <div className="w-full md:w-1/2 mt-[50px] p-6">
      <p className="text-[#03081F] text-[1.5rem]">Order Restaurant food, takeaway and groceries.</p>
      <h3 className="text-[#03081F] font-bold text-[4rem] capitalize">
        Feast Your Senses,
        <span className="text-[#FC8A06] block">Fast and Fresh</span>
      </h3>
      <p className="text-[#03081F]">Enter a postcode to see what we deliver</p>

      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden max-w-md mt-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-4 py-2 w-full focus:outline-none"
        />
        <button className="bg-[#FC8A06] text-white px-4 py-2 hover:bg-[#03081F] hover:text-[#FC8A06] transition w-[140px] rounded-full">
          Search
        </button>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="w-full md:w-1/2 flex justify-end items-center">
      <img src={CheeseLady} alt="Cheese Lady" className="max-w-full h-auto object-contain" />
    </div>
    
  </div>
  )
}

export default Hero