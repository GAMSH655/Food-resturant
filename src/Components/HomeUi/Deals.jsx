import React , {useState} from 'react'
import Bug from "../../assets/Bug.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {foodData , FaqsContents} from './FoodData';
import Marquee from "react-fast-marquee";
import King from "../../assets/King.png"
import Texas from "../../assets/Texas.png"
import Shauma from "../../assets/Shauma.png"
import Donald from  "../../assets/Donald.png"
import John from "../../assets/John.png"
import Kfc from "../../assets/Kfc.png"
const Deals = () => {
    const [isOpen, setIsOpen] = useState(false);
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
      };
  return (
    <div>
        <div className="flex justify-between p-[30px]">
            <h3 className="md:text-[32px] font-bold">
                 up to -40%🎊 order.uk  deals 
            </h3>
            <div className="hidden md:inline">
               <a href="#" className="capitalize p-[8px] hover:border-[2px] hover:border-[#FC8A06] rounded-full hover:font-bold hover:text-[#FC8A06] w-[180px] m-[10px]">vegan</a>
               <a href="#" className="capitalize p-[8px]hover:border-[2px] hover:border-[#FC8A06] rounded-full hover:font-bold hover:text-[#FC8A06] m-[10px]">sushi</a>
               <a href="#" className="capitalize p-[8px] hover:border-[2px] hover:border-[#FC8A06] rounded-full hover:font-bold hover:text-[#FC8A06] m-[10px]">pizza & fastfood </a>
               <a href="#" className="capitalize p-[8px]hover:border-[2px] hover:border-[#FC8A06] rounded-full hover:font-bold hover:text-[#FC8A06] m-[10px]">others</a>
            </div>

     <div className="relative md:hidden inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>


        </div>
        <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
       <div className='slider'>
       <img src={ Bug } alt=""  draggable="false" />
       </div>
       <div className='slider'>
       <img src={ Bug } alt=""  draggable="false" />
       </div>
       <div className='slider'>
       <img src={ Bug } alt=""  draggable="false" />
       </div>
       <div className='slider'>
       <img src={ Bug } alt=""  draggable="false"  />
       </div>
       <div className='slider'>
       <img src={ Bug } alt=""  draggable="false" />
       </div>
       <div className='slider'>
       <img src={ Bug } alt=""  draggable="false"  />
       </div>
      
      </Carousel>
    </div>
      <div className="p-[30px]">
      <h3 className="md:text-[32px] font-bold">
                Order.uk Popular Categories 🤩
            </h3>

       {
         <div className="parent">
         <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
           dotListClass="custom-dot-list-style"
         >
           {foodData.map(({foodImg, FoodName , ResturantNums}, index) => {
             return (
               <div className="slider bg-[#F5F5F5] rounded-t-full" key={index}>
                 <img src={foodImg} alt="movie"  draggable="false" />
                 <h3 className="font-bold text-[1.5rem] p-3">{FoodName}</h3>
                 <p className="text-[#FC8A06] font-normal text-l  p-3">{ResturantNums}</p>
               </div>
             );
           })}
         </Carousel>
       </div>
       }
      </div>

    <Marquee>
      <div className="m-[10px]">
      <img src={Donald} alt="" draggable="false" />
      </div>
      <div className="m-[10px]">
      <img src={John} alt=""  draggable="false"  />
      </div>
      <div className="m-[10px]">
      <img src={Kfc} alt=""   draggable="false" />
      </div>
      <div className="m-[10px]">
      <img src={Texas} alt=""  draggable="false"  />
      </div>
      <div  className="m-[10px]">
      <img src={King} alt=""   draggable="false" />
      </div>
      <div  className="m-[10px]">
      <img src={Shauma} alt=""  draggable="false"   />
      </div>
    </Marquee>
    </div>
  )
}

export default Deals