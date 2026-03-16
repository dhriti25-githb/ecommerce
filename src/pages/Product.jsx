import React, { useContext } from "react";
import { Shopcontext } from "../components/Shopcontext";
import './Product.css'
import {Link} from 'react-router-dom';

const Product = () => {
  const { products, addTocart } = useContext(Shopcontext);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold font-serif p-4 m-4"> OUR COLLECTIONS</h1>

      <div className="product-container">
        {products.map((product) => {
          const { id, title, price, image } = product;

          return (
            <div className="product-card p-2 m-2 flex flex-col items-center text-center" key={id}>
              <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="product-image mx-auto h-64 " />
              </Link>
              <h2 className="text-2xl text-center">{title}</h2>
              <p className="text-center">Rs.{price}/-</p>
              <button onClick={()=>addTocart(product,id)} className="  text-center m-3 bg-orange-500 rounded-xl hover:bg-amber-600 text-black py-3 px-4   ">Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;