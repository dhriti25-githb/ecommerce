import { createContext, useState, useEffect } from "react";
export const Shopcontext = createContext();
import { details } from '../assets/details';
import {toast} from 'react-toastify';

const Shopcontextprovider = ({ children }) => {
    const [products, setProducts] = useState(details);
    const [cart,setCart]= useState([]);
    const [quantity,setQuantity] = useState(0)
    const[total,setTotal] = useState(0)
    useEffect(()=>{
        const total= cart.reduce((accumulator,currentItem)=>{
            const priceAsnumber=parseFloat(currentItem.price)
            if(isNaN(priceAsnumber)){
                return accumulator
            }
            return accumulator +priceAsnumber *currentItem.amount
        },0)
        setTotal(total)
    }, [cart])
    useEffect(()=>{
        if(cart){
            const amount= cart.reduce((accumulator,currentItem)=>
            {
                return accumulator+ currentItem.amount
            },0)
            setQuantity(amount)
        }
    },[cart])
    const addTocart =(product,id)=>{
        const newItem ={...product,amount:1}
        const cartItem = cart.find((item)=>{
            return item.id === id
        })
        if(cartItem){
            const newCart = cart.map((item)=>{
                if(item.id === id){
                    return {...item,amount:cartItem.amount +1}
                }
                return item
            })
            setCart(newCart)
        }
        
      else{
        setCart([...cart,newItem])
        toast.success("Product added to cart")
      }
    }
    const clearCart = ()=>{
        setCart([])
        toast.success("cart empty")
    }
    const removeFromCart =(id)=>{
        const newCart = cart.filter((item)=>{
            return item.id!== id
        })
        setCart(newCart)
        toast.success("Item removed from cart")
    }
    const increaseAmount =(id)=>{
            const cartItem = cart.find((item)=> item.id ===id);
            addTocart(cartItem,id)
    }
    const decreaseAmount =(id)=>{
            const cartItem = cart.find((item)=>{
                return item.id === id;
            })
            if (cartItem){
                if(cartItem.amount<2){
                    removeFromCart(id)
                } else {
                    const newCart = cart.map((item)=>{
                        if(item.id === id){
                            return{...item,amount:cartItem.amount-1}
                        }return item 
                    })
                    setCart(newCart)
                }
            }
    }
    return (
        <Shopcontext.Provider value={{ products, cart, quantity, total, addTocart, clearCart, removeFromCart, increaseAmount, decreaseAmount }}>{children}</Shopcontext.Provider>
    );
};

export default Shopcontextprovider;