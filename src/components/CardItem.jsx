import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CardContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="item-details">
        <div>
          <h4>{item.title}</h4>
        </div>
        <div>
          <p>Quantity: {item.quantity}</p>
        </div>
        <div>
          <p>Price: ₹{item.price}</p>
        </div>
        <button  className = "cartButton" onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
