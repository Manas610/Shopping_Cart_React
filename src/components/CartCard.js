import { useCart } from "../context/CartContext"
import "./CartCard.css"

export const CartCard = ({product}) => {

  const { removeFromCart } = useCart();

  return (
    <div className="cartCard">
      <img src={product.image} alt={product.name} />
        <p className="productName">{product.name}</p>
        <p className="productPrice">${product.price}</p>
        <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  )
}
