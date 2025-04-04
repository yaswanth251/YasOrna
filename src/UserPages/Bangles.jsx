import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserHome from "./UserHome";
import Foot from "./Foot";
import DetailView from "./DetailView";

import Bangle1 from "../assets/Images/products/Bangles/image117.png";
import Bangle2 from "../assets/Images/products/Bangles/image398.png";
import Bangle3 from "../assets/Images/products/Bangles/image299.png";
import Bangle4 from "../assets/Images/products/Bangles/image90.png";
import Bangle5 from "../assets/Images/products/Bangles/image391.png";
import Bangle6 from "../assets/Images/products/Bangles/image392.png";
import Bangle7 from "../assets/Images/products/Bangles/image393.png";
import Bangle8 from "../assets/Images/products/Bangles/image394.png";

const products = [
  { image: Bangle1, title: "Gold Bangles", price: 4500 },
  { image: Bangle2, title: "Diamond Bangles", price: 13000 },
  { image: Bangle3, title: "Ruby Bangles", price: 8000 },
  { image: Bangle4, title: "Emerald Bangles", price: 9900 },
  { image: Bangle5, title: "Sapphire Bangles", price: 11500 },
  { image: Bangle6, title: "Platinum Bangles", price: 16000 },
  { image: Bangle7, title: "Rose Gold Bangles", price: 8900 },
  { image: Bangle8, title: "Silver Bangles", price: 4200 },
];

function Bangles() {
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

export default Bangles;
