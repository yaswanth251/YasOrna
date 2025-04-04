import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserHome from "./UserHome";
import Foot from "./Foot";

import Earring1 from "../assets/Images/products/Earrings/image17.png";
import Earring2 from "../assets/Images/products/Earrings/image18.png";
import Earring3 from "../assets/Images/products/Earrings/image19.png";
import Earring4 from "../assets/Images/products/Earrings/image20.png";
import Earring5 from "../assets/Images/products/Earrings/image21.png";
import Earring6 from "../assets/Images/products/Earrings/image22.png";
import Earring7 from "../assets/Images/products/Earrings/image23.png";
import Earring8 from "../assets/Images/products/Earrings/image24.png";

const products = [
  { image: Earring1, title: "Gold Earrings", price: 4500 },
  { image: Earring2, title: "Diamond Earrings", price: 13000 },
  { image: Earring3, title: "Ruby Earrings", price: 8000 },
  { image: Earring4, title: "Emerald Earrings", price: 9900 },
  { image: Earring5, title: "Sapphire Earrings", price: 11500 },
  { image: Earring6, title: "Platinum Earrings", price: 16000 },
  { image: Earring7, title: "Rose Gold Earrings", price: 8900 },
  { image: Earring8, title: "Silver Earrings", price: 4200 },
];

function Earrings() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [wishlist, cart]);

  const handleAddToWishlist = (product) => {
    if (!wishlist.some((item) => item.image === product.image)) {
      setWishlist([...wishlist, product]);
    }
  };

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.image === product.image)) {
      setCart([...cart, product]);
    }
  };

  return (
    <>
      <UserHome />
      <div className="p-4 md:p-8">
        <button
          onClick={() => navigate("/Merge")}
          className="bg-amber-600 p-2 rounded-2xl text-white mb-5"
        >
          Back to Home
        </button>
        <h1 className="text-3xl text-center text-amber-800">Hand Picked for You</h1>
        <hr className="opacity-25 mb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white shadow-2xl p-5 flex flex-col rounded-md justify-center items-center gap-2 cursor-pointer transition-transform hover:scale-105"
              onClick={() => navigate("/DetailView", { state: { product } })}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[250px] h-[250px] rounded-md shadow-lg object-cover"
              />
              <h1>{product.title}</h1>
              <h1>₹{product.price}/-</h1>
              <div className="flex justify-between w-full px-4">
                <FaHeart
                  className={`cursor-pointer text-lg ${wishlist.some((item) => item.image === product.image) ? "text-red-500" : "text-gray-400"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToWishlist(product);
                  }}
                />
                <FaShoppingCart
                  className={`cursor-pointer text-lg ${cart.some((item) => item.image === product.image) ? "text-green-500" : "text-gray-400"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Foot />
    </>
  );
}

export default Earrings;
