import React from "react";
import { useNavigate } from "react-router-dom";
import Foot from "./Foot";
import UserHome from "./UserHome";

const Wishlist = ({ wishlist = [], removeFromWishlist }) => {
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

      {/* Wishlist Container */}
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          💖 Your Wishlist
        </h2>

        {wishlist.length === 0 ? (
          <p className="text-gray-600 text-center text-lg">
            Your wishlist is empty. Start adding your favorites! ✨
          </p>
        ) : (
          <ul className="space-y-4">
            {wishlist.map((item, idx) => (
              <li 
                key={idx} 
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-md shadow"
                />
                <div className="text-gray-800 font-semibold text-lg">
                  ₹{item.price.toLocaleString()}
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition active:scale-95"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-2"><Foot /></div>
    </>
  );
};

export default Wishlist;
