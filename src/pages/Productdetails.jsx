import React,{useContext} from 'react'
import { Shopcontext } from '../components/Shopcontext'
import {details} from '../assets/details'
import { useParams } from 'react-router-dom';
import './Productdetails.css'

const Productdetails = () => {
    const {addTocart}= useContext(Shopcontext);
    const {id} = useParams()
    const product = details.find(product =>{
        return product.id === parseInt(id)
    })
  return (
    <div className='flex flex-row items-center justify-center h-screen'>
        <div className="right  p-10">
            <img className='rounded-lg border border-black '  src={product.image} alt={product.title} />
        </div>
        <div className="left p-4 m-4">
            <h2 className='text-2xl font-serif'>{product.title}</h2>
            <p>{product.description}</p>
            <p className='text-2xl'>${product.price.toFixed(2)}</p>
            <button onClick={()=>addTocart(product,id)} className='bg-rose-950 text-white p-3 mt-3 rounded-lg'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Productdetails