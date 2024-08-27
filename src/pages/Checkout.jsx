import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";

const Checkout = () => {
  const { cartItems } = useContext(CardContext);

  if (cartItems.length === 0) return <p>Your cart is empty. Add some items to proceed.</p>;

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="order-summary">
        {cartItems.map(item => (
          <div key={item.id}>
            <p>{item.title} - ${item.price}</p>
          </div>
        ))}
        <h3>Total: ${cartItems.reduce((sum, item) => sum + item.price, 0)}</h3>
      </div>
      <form>
        <div>
          <label>Name</label>
          <input type="text" required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
