import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserHome from "./UserHome";
import Foot from "./Foot";

import Bangle17 from "../assets/Images/products/Ring/image107.jpg";
import Bangle18 from "../assets/Images/products/Ring/image118.jpg";
import Bangle19 from "../assets/Images/products/Ring/image119.jpg";
import Bangle20 from "../assets/Images/products/Ring/image120.jpg";
import Bangle21 from "../assets/Images/products/Ring/image121.jpg";
import Bangle22 from "../assets/Images/products/Ring/image122.jpg";
import Bangle23 from "../assets/Images/products/Ring/image123.jpg";
import Bangle24 from "../assets/Images/products/Ring/image124.jpg";

const products = [
  { image: Bangle17, title: "Gold Ring", price: 5000 },
  { image: Bangle18, title: "Diamond Ring", price: 12000 },
  { image: Bangle19, title: "Ruby Ring", price: 7000 },
  { image: Bangle20, title: "Emerald Ring", price: 9500 },
  { image: Bangle21, title: "Sapphire Ring", price: 11000 },
  { image: Bangle22, title: "Platinum Ring", price: 15000 },
  { image: Bangle23, title: "Rose Gold Ring", price: 8500 },
  { image: Bangle24, title: "Silver Ring", price: 4000 },
];

function Ring() {
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

export default Ring;