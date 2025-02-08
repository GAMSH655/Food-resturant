import React from 'react'
import {FaBars , FaStar , FaTimes} from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import  Basket from "../assets/Basket.svg"
import Forward from "../assets/Forward.svg"
import Logo from "../assets/Logo.png"
import { NavLink } from 'react-router-dom';
import {FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
const Header = () => {
  const [openMenu , setOpenMenu] = useState(false)
    const NavLinks = [
        {Link: "Home", path: "#"},
        {Link: "Browse menu", path: "#"},
        {Link: "Special offers" , path: "#"},
        {Link: "Resturants" , path: "#"},
        {Link: "Track orders" , path: "#"},
    ]

    const handleMenu = () =>{
      setOpenMenu(!openMenu)
    }
  return (
    <div>
     <div className="bg-[#FAFAFA] hidden md:flex  md:justify-between md:items-center">
      <p className="text-xl font-bold"> 
      <FaStar className=" inline text-[#FC8A06] text-xl m-[5px]" />  Get 5% Off your first order,
        <span className="text-[#FC8A06] text-xl font-bold">Promo: ORDER5</span></p>
    
      <div className="text-xl font-bold  ">
        <h3 className=""> 
        < FaLocationDot className='inline'/>
        Regent Street, A4, A4201, London
        <span className="text-[#FC8A06] ml-[20px] capitalize font-normal underline">Change location </span>
        </h3>
      </div>

      <div className="bg-[#028643]  hidden md:flex b rounded-b-md  ">
        <div className="border-r-2 border-[white] p-[20px]">
        <img src={Basket} alt=""  width="40" height="40" />
        </div>
        <p className="font-bold text-xl text-white capitalize border-r-2 border-[white] p-[20px]">23 items</p>
        <p className="font-bold text-xl text-white capitalize p-[20px] ">GBP 79.89</p>
         <div className="border-l-2 border-[white] p-[20px]">
         <img src={Forward} alt=""  width="40" height="40" />
         </div>
      </div>
    </div>
   
   
    <div className="mt-[30px] flex justify-between items-center p-[0px] md:p-[25px] shadow-md   bg-[white]">
    <img src={Logo} alt="" className='max-w-full h-auto'/>
    <nav className=" mt-[20px]  flex ">
    {NavLinks.map((link, index) => (
        <a 
        href={link.path} 
        key={index} 
         className="hidden md:flex text-xl font-normal capitalize text-gray-800 p-5 hover:text-orange-500 transition duration-300">
        {link.Link}
        </a>
    ))}
          </nav>
          <button className=' hidden md:flex bg-[#03081F] rounded-full text-white capitalize font-normal p-3 m-2 w-[180px]'> 
            <FaUserCircle className='mr-[9px] mt-[4px] text-[#FC8A06]'/> login / singup
          </button>

          <button className=" block md:hidden font-bold text-[2.5rem] p-2" onClick={handleMenu}>
           {
            openMenu ? <FaTimes/> : <FaBars/>
           }
          </button>
    </div>

    {/* mobile header  */}
    {
      openMenu && (
        
    <div className="">
    <nav className=" mt-[20px]   bg-[white] text-center ">
    {NavLinks.map((link, index) => (
        <a 
        href={link.path} 
        key={index} 
         className="block md:hidden text-xl font-normal capitalize text-gray-800 p-5 hover:text-orange-500 transition duration-300">
        {link.Link}
        </a>
    ))}
          </nav>
          <div className="md:hidden flex justify-center">
          <button className='flex bg-[#03081F] rounded-full text-white capitalize font-normal p-3 m-2 w-[180px]'> 
            <FaUserCircle className='mr-[9px] mt-[4px] text-[#FC8A06]'/> login / singup
          </button>
          </div>
    </div>
      ) 
    }
    <div className="bg-[#028643] flex justify-center items-center md:hidden">
        <div className="border-r-2 border-[white] p-[20px] ">
        <img src={Basket} alt=""  width="40" height="40" />
        </div>
        <p className="font-bold text-xl text-white capitalize border-r-2 border-[white] p-[20px]">23 items</p>
        <p className="font-bold text-xl text-white capitalize p-[20px] ">GBP 79.89</p>
         <div className="border-l-2 border-[white] p-[20px]">
         <img src={Forward} alt=""  width="40" height="40" />
         </div>
      </div>
    </div>
  )
}

export default Header