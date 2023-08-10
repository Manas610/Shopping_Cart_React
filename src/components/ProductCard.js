import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({product}) => {

  const { addToCart, removeFromCart , cartList } = useCart();
  const [isInCart , setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === product.id);
    if(productIsInCart){
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  } , [cartList ,product.id])

  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} />
      <p className="name">{product.name}</p>
      <div className="action">
        <p>${product.price}</p>
        { isInCart ? <button className="remove" onClick={() => removeFromCart(product)} >Remove</button> : <button onClick={() => addToCart(product)} >Add to Cart</button> }
        
      </div>
    </div>
  )
}
