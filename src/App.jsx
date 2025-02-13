import React from 'react'
import Header from "../src/Components/Newheader"
import Hero from "../src/Components/NewHero"
import Deals from "../src/Components/Deals"
import Order from '../src/Components/Order'
import Footer from "../src/Components/Footer"
const App = () => {
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

export default App
