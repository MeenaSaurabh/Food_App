import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  // Redux Toolkit 
  const cartItems = useSelector((store) => store.cart.items);  // here we are subscribed to a small portion of store i.e items 
  // console.log(cartItems);
  // OR
  // const store = useSelector((store) => store);    // here we are subscribed to whole store which shoudn't be done 
  // const cartItems = store.cart.items   // Less Efficient
  // OR
  // const {items} = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 mt-28">
      <h1 className="text-2xl font-bold">CART</h1>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="p-2 m-2 bg-black text-white rounded-lg"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is Empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
