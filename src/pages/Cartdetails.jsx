import React, { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Shopcontext } from '../components/Shopcontext'
import './Cart.css'
const Cartdetails = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(Shopcontext);
  if (!item) return null; // defensive
  const { id, title, image, price, amount } = item;
  return (
    <div>
      <div className="cart-item">
        <div className="flex flex-row items-center">
          <img className='w-11 h-11 ' src={image} alt={title} />
          <div className="prod-info">
            <h3 className=''>{title}</h3>
            < FaTrash  onClick={() => removeFromCart(id)}  />
          </div>
        </div>
        <div className="quantity ">
          <button onClick={() => decreaseAmount(id)}>- </button> 
          <button onClick={() => increaseAmount(id)}>+</button>({amount})
        </div>
        <div className="price">${price}</div>
        <div className="total">${price*amount}</div>
      </div>
    </div>
  );
}

export default Cartdetails