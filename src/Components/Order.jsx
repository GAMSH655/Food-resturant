import React from "react";
import Couples from "../assets/Couples.png";
import Logo from "../assets/Logo.png";
import Store from "../assets/Store.png";
import Partner from "../assets/Partner.png";
import Ride from "../assets/Ride.png";
import Marquee from "react-fast-marquee";
import {foodData, FaqsContents} from "../Components/FoodData"
const Order = () => {
  const ListStyles = () => {
    return "hidden md:block capitalize hover:font-bold p-[6px] border-2 border-transparent hover:border-[#FC8A06] rounded-full m-[10px]";
  };
  
  const FaqStyles = () => {
    return " md:block capitalize font-normal p-[6px] hover:bg-[#FC8A06] text-[15px]  mt-[9px] rounded-full text-lg text-center hover:scale-105 hover:shadow-lg transition-transform duration-200";
  };
  

  const ArrayLink = [
    "Frequent questions",
    "Who we are",
    "Partner program",
    "Partner support",
  ];

  const Faqs = [
    "How does order.uk work?",
    "What payment methods are accepted?",
    "Can I track my orders in real-time?",
    "Are there any special discounts or promotions available?",
    "Is Order.UK available in my area?",
  ];

  return (
    <div>
      <div className="p-0 m-0 md:m-[50px] bg-[#A6A6A6] flex flex-wrap-reverse md:justify-evenly rounded-md">
        <img src={Couples} alt="" className="w-full md:w-1/2" draggable="false" />

        <div className="mt-[50px]">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="" className="w-1/4 md:w-auto" />
            <span className="font-bold text-[2rem] md:text-[4rem] text-[#03081F]">
              ing
            </span>
            <span className="text-[#03081F] font-bold text-[2.5rem] p-[5px]">
              is more
            </span>
          </div>

          <div className="p-[4px] md:p-[9px] bg-transparent md:bg-[#03081F] rounded-full">
            <h3 className="font-semibold text-[2rem] text-[#FC8A06] ml-[15px] underline capitalize">
              personalised <span className="text-white"> & instant </span>
            </h3>
          </div>

          <p className="text-[#03081F] text-xl m-5">
            Download the Order.uk app for faster ordering
          </p>
          <img src={Store} alt="" />
        </div>
      </div>

      {/* Marquee Section */}
      <Marquee>
        <div className="m-[10px]">
          <img src={Ride} alt="" draggable="false" className="w-1/2 md:w-full" />
        </div>
        <div className="m-[10px]">
          <img src={Partner} alt="" draggable="false" className="w-1/2 md:w-full" />
        </div>
        <div className="m-[10px]">
          <img src={Ride} alt="" draggable="false" className="w-1/2 md:w-full" />
        </div>
        <div className="m-[10px]">
          <img src={Partner} alt="" draggable="false" className="w-1/2 md:w-full" />
        </div>
      </Marquee>

      {/* Information Section */}
     


     <div className="bg-[#D9D9D9] rounded-lg m-[20px] p-[20px]">
     <div className=" flex flex-col md:flex-row justify-between m-[40px] p-4">
        <h3 className="font-bold text-[2rem] ml-[15px]">Know more about us</h3>
        <div className="flex flex-col md:flex-row gap-4">
          {ArrayLink.map((item, index) => (
            <a href="#" key={index} className={ListStyles()}>
              {item}
            </a>
          ))}
        </div>
      </div>
       
     <div className="flex flex-col md:flex-row justify-between bg-[#03081F] text-white md:text-black md:bg-white rounded-lg md:m-[50px] ">
     <div className=" p-8  m-4 rounded-lg">
        {Faqs.map((item, index) => (
          <p  key={index} className={FaqStyles()}>
            {item}
          </p>
        ))}
      </div>
      <div className="  ">
       <div className="block md:flex md:justify-between  mt-7">
       {FaqsContents.map(({ faqImg, faqTitle, faqText }, index) => (
          <div key={index} className="m-[20px] bg-[#D9D9D9]  rounded-md">
             <p className="font-bold text-center p-3 text-[1rem]">{faqTitle}</p>
            <div className="flex justify-center p-5 items-center">
            <img src={faqImg} alt="" className="w-1/2 md:w-[150px]] " />
            </div>
            <div>
              <p className=" font-bold m-[8px] text-center">{faqText}</p>
            </div>
          </div>
        ))}
       </div>
       <p className="text-center p-[10px]">Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
      </div>
     </div>
     </div>
     <div className="  block md:flex flex-wrap md:flex-row items-center justify-center md:justify-between gap-6 m-10 bg-[#FC8A06] text-white rounded-lg p-6 md:p-10">
  
     {[
  { value: "546+", label: "Registered Riders" },
  { value: "789,900+", label: "Orders Delivered" },
  { value: "690+", label: "Restaurants Partnered" },
  { value: "17,457+", label: "Food Items" },
].map((item, index, array) => (
  <div 
    key={index} 
    className={`flex flex-col items-center text-center p-6 md:p-8 
      ${index !== array.length - 1 ? 'md:border-r-2 border-white' : ''}`}
  >
    <h3 className="font-semibold text-4xl md:text-5xl">{item.value}</h3>
    <p className="font-bold capitalize">{item.label}</p>
  </div>
))}


</div>

    </div>
  );
};

export default Order;
