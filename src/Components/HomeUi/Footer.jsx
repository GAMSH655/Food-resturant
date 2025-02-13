import React from 'react';
import Store from "../../assets/Store.png";
import Logo from "../../assets/Logo.png";
import { FaFacebook, FaTiktok, FaInstagram, FaSnapchat } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" block md:flex md:justify-between bg-[#D9D9D9] p-6">
      {/* Logo and Company Info */}
      <div className="flex flex-col items-center md:items-start">
        <img src={Logo} alt="Company Logo" className='mb-4' />
        <img src={Store} alt="Store" className='mt-5' />
        <p className="text-center md:text-left md:p-2 md:mt-2 text-lg">
          Company # 490039-445, Registered with House of Companies.
        </p>
      </div>
      
      {/* Newsletter Signup */}
      <div className="m-5 md:w-1/3">
        <h3 className="text-[#03081F] font-bold text-lg md:text-2xl capitalize">
          Get exclusive deals in your inbox
        </h3>
        <div className="flex flex-start  md:block">
          <div className="flex items-center border-2 border-black rounded-full overflow-hidden max-w-md mt-4">
            <input 
              type="text" 
              placeholder="Enter your email..." 
              className="px-4 py-2 w-full focus:outline-none"
            />
            <button className="bg-[#FC8A06] text-white px-4 py-2 hover:bg-[#03081F] hover:text-[#FC8A06] transition w-[140px] rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex flex-start md:justify-start mt-4 space-x-3">
          <FaFacebook className='text-3xl text-[#03081F]' />
          <FaTiktok className='text-3xl text-[#03081F]' />
          <FaInstagram className='text-3xl text-[#03081F]' />
          <FaSnapchat className='text-3xl text-[#03081F]' />
        </div>
      </div>
      
      {/* Legal Pages */}
      <div className="m-5">
        <h3 className="text-[#03081F] font-bold text-2xl capitalize">Legal Pages</h3>
        {['Terms & Conditions', 'Privacy', 'Cookies', 'Modern Slavery Statement'].map((item, index) => (
          <a key={index} href="#" className="underline text-xl text-[#03081F] block capitalize mt-3">
            {item}
          </a>
        ))}
      </div>
      
      {/* Important Links */}
      <div className="m-5">
        <h3 className="text-[#03081F] font-bold text-2xl capitalize">Important Links</h3>
        {['Get Help', 'Add Your Restaurant', 'Sign Up to Deliver', 'Create a Business Account'].map((item, index) => (
          <a key={index} href="#" className="underline text-xl text-[#03081F] block capitalize mt-3">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
