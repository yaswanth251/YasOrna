import React from "react";
import { useNavigate } from "react-router-dom";
import Foot from "./Foot";
import UserHome from "./UserHome"; // Ensuring consistency with Wishlist

const Cart = ({ cart = [], removeFromCart }) => {
  const navigate = useNavigate();

  return (
    <>
      <UserHome />

      {/* Back to Home Button */}
      <div className="p-4">
        <button
          onClick={() => navigate("/Merge")}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 hover:text-white transition active:scale-95"
        >
          🔙 Back To Home
        </button>
      </div>

      {/* Cart Container */}
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🛒 Your Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center text-lg">
            Your cart is empty. Start shopping now! 🛍️
          </p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md shadow"
                />
                <div className="text-gray-800 font-semibold text-lg">
                  ₹{item.price.toLocaleString()}
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition active:scale-95"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Checkout Button */}
        {cart.length > 0 && (
          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/checkout")}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition active:scale-95"
            >
              🛍️ Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      <Foot />
    </>
  );
};

export default Cart;
