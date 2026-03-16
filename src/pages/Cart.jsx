import React, { useContext } from 'react'
import { Shopcontext } from '../components/Shopcontext'
import Cartdetails from '../pages/Cartdetails'
import { IoTrashBin } from 'react-icons/io5';
import './Cart.css'

const Cart = () => {

  const { cart, products, quantity, clearCart, total, shippingFee } = useContext(Shopcontext);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      
      <div className="cart-left bg-neutral-300 border-1 border-gray-400 w-full lg:w-2/3 p-4 rounded-lg">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1  className='text-3xl text-center'>Shopping Cart</h1>
          <h1 className='text-3xl text-center'>Items: ({quantity})</h1>
          <h1 >
            <IoTrashBin onClick={clearCart} className="text-2xl" />
          </h1>
        </div>

        <div className="hidden md:grid grid-cols-4 font-semibold border-b pb-2">
          <span >Product description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        <div className="cart-detail">
          {
            cart.length > 0 ? (
              cart.map((item) => (
                <Cartdetails item={item} key={item.id} />
              ))
            ) : (
              <p>Your cart is empty</p>
            )
          }
        </div>

      </div>

      <div className="cart-right bg-neutral-300 w-full lg:w-1/3 border p-4 rounded-lg h-fit">

        <h2 className='text-4xl text-center '>Cart summary</h2>

        <div className="flex flex-row justify-between items-center pb-3">
          <span>Items:</span>
          <span>{quantity}</span>
        </div>

        <div className="flex flex-row justify-between items-center pb-3">
          <span>Total:</span>
          <span>${total}</span>
        </div>

        <div className="flex flex-row justify-between items-center pb-3">
          <span>Shipping fee:</span>
          <span>free</span>
        </div>

        <div className='flex flex-row justify-between items-center pb-3' >
          <span>SubTotal:</span>
          <span>${total}</span>
        </div>

        <button className='text-xl font-bold text-center bg-rose-950 text-white rounded-md w-full py-2'>CHECKOUT</button>

      </div>

    </div>
  )
}

export default Cart