import React from 'react'
import image from '../assets/fashionpic2.jpg'


const Hero = () => {
  return (
    <>
    <div>
        <div className='w-full h-screen  '>
           <div className="relative w-full h-screen position-relative">
  <img
    src={image}
    alt="Hero"
    className="w-full h-full object-cover object-center border-b-4 border-amber-50"
  />

  <h1 className="absolute top-20 w-full text-center text-white text-5xl font-serif">
    CLASSY FASHION
  </h1>
  
</div>
            
            </div></div></>
            
  )
}

export default Hero