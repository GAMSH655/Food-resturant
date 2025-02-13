import React from 'react'
import CheeseLady from "../../assets/CheeseLady.png"
// import SpagLady from "../../assets/SpagLady.png"
// import Order1 from "../../assets/Order1.png"
// import Notification from "../assets/Notification.png"
const Hero = () => {
  return (
    <div className="block md:flex md:justify-between md:text-[#03081F] text-white bg-[#03081F] md:bg-[#E2E2E2] m-[10px] md:m-[30px] rounded-md shadow-md overflow-hidden">
    {/* Left Content */}
    <div className="w-full md:w-1/2 mt-[50px] p-6">
      <p className="text-center md:text-left text-[1.5rem]">Order Restaurant food, takeaway and groceries.</p>
      <h3 className="] text-center md:text-left font-bold text-[1.5rem] md:text-[4rem] capitalize md:p-[0px] p-[10px]">
        Feast Your Senses,
        <span className="text-[#FC8A06]  text-center md:text-left block">Fast and Fresh</span>
      </h3>
      <p className="text-center md:text-left">Enter a postcode to see what we deliver</p>

      {/* Search Bar */}
     <div className="flex justify-center in-checked: md:block ">
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
    </div>

    {/* Right Image Section */}
    <div className="w-full md:w-1/2 flex justify-end items-center">
      <img src={CheeseLady} alt="Cheese Lady" className="max-w-full h-auto object-contain md:block hidden" />
    </div>
    
  </div>
  )
}

export default Hero