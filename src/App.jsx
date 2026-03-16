import React from 'react'
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Home from './pages/Home';
import {ToastContainer} from 'react-toastify';
import Productdetails from './pages/Productdetails';


const App = () => {
  return (
    <>
    <ToastContainer/>
   
    
    
    <Routes>
      <Route path ='/' element ={<Home/>}/>
      
      <Route path ='/product' element={<Product/>}/>
      <Route path ='/product/:id' element={<Productdetails/>}/>
    
      <Route path ='/Cart' element={<Cart/>}/>
      <Route path ='/login' element={<Login/>}/>
    </Routes>
   
    </>
  )
}

export default App