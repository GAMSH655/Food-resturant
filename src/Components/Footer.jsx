import React from 'react'
import Store from "../assets/Store.png"
import Logo from "../assets/Logo.png"
import { FaFacebook , FaTiktok , FaInstagram , FaSnapchat } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="flex  flex-wrap  md:justify-between p-[20px] bg-[#D9D9D9]">
      <div className="">
        <div className="flex items-center">
        <img src={Logo} alt="" className='flex justify-center items-center' />
        </div>
        <div className="flex items-center">
        <img src={Store} alt="" className='mt-[20px]' />
        </div> 
      
       <p className="text-center md:block md:p-[10px] md:m-[20px] text-lg ">Company # 490039-445, Registered with House of companies.</p>
      </div>
      
      <div className="m-[20px]">
         <h3 className="capitalize text-[#03081F] font-bold text-lg md:text-2xl">get exclusive deals in your in box</h3>
         <div className="flex justify-center  md:block ">
        <div className="flex items-center bg-[#D9D9D9] border-2 border-black rounded-full overflow-hidden max-w-md mt-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-4 py-2 w-full focus:outline-none "
        />
        <button className="bg-[#FC8A06] text-white px-4 py-2 hover:bg-[#03081F] hover:text-[#FC8A06] transition w-[140px] rounded-full">
          Search
        </button>
      </div>
     </div>
     <div className="flex m-[10px]">
      <FaFacebook className='font-bold text-3xl text-[#03081F] m-[5px]'/>
      < FaTiktok  className='font-bold text-3xl text-[#03081F] m-[5px]'/>
      < FaInstagram  className='font-bold text-3xl text-[#03081F] m-[5px]'/>
      <  FaSnapchat  className='font-bold text-3xl text-[#03081F] m-[5px]'/>
      </div>
      </div>
    <div className="m-[25px] md:mt-[0px]">
     <h3 className="capitalize text-[#03081F] font-bold text-2xl">legal pages </h3>
     <a href="#" className="underline font-normal text-xl  text-[#03081F] block capitalize mt-6"> terms & condition </a>
     <a href="#" className="underline font-normal text-xl  text-[#03081F] block capitalize  mt-3"> privacy</a>
     <a href="#" className="underline font-normal text-xl  text-[#03081F] block capitalize  mt-3"> cookies</a>
     <a href="#" className="underline font-normal text-xl  text-[#03081F] block capitalize  mt-3"> modern slavery statement</a>
     </div>
    <div className="m-[15px] md:mt-[0px]">
     <h3 className="capitalize text-[#03081F] font-bold text-2xl">important links</h3>
     <a href="#" className="underline font-normal text-xl  text-[#03081F] block capitalize mt-6"> Get help </a>
     <a href="#" className="underline font-normal text-xl  text-[#03081F] block capitalize  mt-3"> add you resturant</a>
     <a href="#" className="underline font-normal text-xl  text-[#03081F] block capitalize  mt-3"> sign up to deliver </a>
     <a href="#" className="underline font-normal text-xl  text-[#03081F] block capitalize  mt-3"> createa a business account </a>
     </div>
    </div>
  )
}

export default Footer