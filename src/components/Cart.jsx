import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../Features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {cartItems.length === 0 ? (
        <p className="text-center text-xl font-semibold">🛒 Cart is empty</p>
      ) : (
        <div className="flex flex-col space-y-5">
          {cartItems.map((item) => (
            <div
              className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-md shadow-md"
              key={item.id}
            >
              {/* Product Image & Details */}
              <div className="flex items-center space-x-4 w-full md:w-1/2">
                <img
                  className="w-24 md:w-40 object-cover rounded"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-gray-700 font-bold">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  ➖
                </button>
                <span className="text-lg font-bold">{item.quantity}</span>
                <button
                  className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  ➕
                </button>
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 w-full md:w-1/2 mt-4 md:mt-0">
                <button
                  className="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-600 transition"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price & Clear Cart Button */}
          <div className="flex justify-between items-center border-t pt-4">
            <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            <button
              className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600 transition"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
