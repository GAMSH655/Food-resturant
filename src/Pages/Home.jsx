import React from 'react'
import Header from "../../src/Components/HomeUi/Newheader"
import Hero from "../../src/Components/HomeUi/NewHero"
import Deals from "../../src/Components/HomeUi/Deals"
import Order from "../../src/Components/HomeUi/Order"
import Footer from "../../src/Components/HomeUi/Footer"
const Home = () => {
  return (
    <div>
    <Header/>
    <Hero/>
    <Deals/>
    <Order/>
    <Footer/>
    </div>
  )
}

export default Home