import React from 'react'
import ChefBurger from "../assets/ChefBurger.png"
import Grand from "../assets/Grand.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Deals = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 6 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 768, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        }
      };
  return (
    <div>
        <div className="flex justify-between p-[30px]">
            <h3 className="md:text-[32px] font-bold">
                 up to -40%🎊 order.uk  deals 
            </h3>
            <div className="hidden md:flex">
               <a href="#" className="capitalize p-[8px] hover:border-[2px] hover:border-[#FC8A06] rounded-full hover:font-bold hover:text-[#FC8A06] w-[180px] m-[10px]">vegan</a>
               <a href="#" className="capitalize p-[8px]hover:border-[2px] hover:border-[#FC8A06] rounded-full hover:font-bold hover:text-[#FC8A06] m-[10px]">sushi</a>
               <a href="#" className="capitalize p-[8px] hover:border-[2px] hover:border-[#FC8A06] rounded-full hover:font-bold hover:text-[#FC8A06] m-[10px]">pizza & fastfood </a>
               <a href="#" className="capitalize p-[8px]hover:border-[2px] hover:border-[#FC8A06] rounded-full hover:font-bold hover:text-[#FC8A06] m-[10px]">others</a>
            </div>
        </div>
        <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
       <img src={ChefBurger} alt="" className='m-[20px]'  />
       <img src={Grand} alt=""   className='m-[20px]'  />
       <img src={ChefBurger} alt=""   className='m-[20px]'  />
       <img src={Grand} alt=""   className='m-[20px]'  />
       <img src={ChefBurger} alt=""   className='m-[20px]'  />
       <img src={Grand} alt=""   className='m-[20px]'  />
      </Carousel>
    </div>
    </div>
  )
}

export default Deals