import React from 'react'
import Hero from '../components/Hero';
import Product from './Product';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      
        <div className='bg-neutral-300 '>
        <Navbar/>
        <Hero/>
        <Product/></div>
    </div>
  )
}

export default Home