import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import CartItem from "../components/CardItem";

const Cart = () => {
  const { cartItems } = useContext(CardContext);

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart">
      <div>
        <h2>Your Shopping Cart</h2>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="checkoutContainer">
        <div className="total">
          <h3>
            Total: ${cartItems.reduce((sum, item) => sum + item.price, 0)}
          </h3>
        </div>
        <button>Proceed to Checkout</button>
      </div>
     
    </div>
  );
};

export default Cart;
