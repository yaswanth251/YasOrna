import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserHome from "./UserHome";
import Foot from "./Foot";

import Necklace1 from "../assets/Images/products/Necklace/image1007.png";
import Necklace2 from "../assets/Images/products/Necklace/image1018.png";
import Necklace3 from "../assets/Images/products/Necklace/image1019.png";
import Necklace4 from "../assets/Images/products/Necklace/image1020.png";
import Necklace5 from "../assets/Images/products/Necklace/image1021.png";
import Necklace6 from "../assets/Images/products/Necklace/image1022.png";
import Necklace7 from "../assets/Images/products/Necklace/image1023.png";
import Necklace8 from "../assets/Images/products/Necklace/image1024.png";

const products = [
  { id: 1, image: Necklace1, title: "Gold Necklace", price: 7500 },
  { id: 2, image: Necklace2, title: "Diamond Necklace", price: 22000 },
  { id: 3, image: Necklace3, title: "Ruby Necklace", price: 18000 },
  { id: 4, image: Necklace4, title: "Emerald Necklace", price: 19900 },
  { id: 5, image: Necklace5, title: "Sapphire Necklace", price: 21500 },
  { id: 6, image: Necklace6, title: "Platinum Necklace", price: 26000 },
  { id: 7, image: Necklace7, title: "Rose Gold Necklace", price: 18900 },
  { id: 8, image: Necklace8, title: "Silver Necklace", price: 9200 },
];

function Necklace() {
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

  const handleAddToWishlist = (product, event) => {
    event.stopPropagation(); // Prevent click from navigating to detail page
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const handleAddToCart = (product, event) => {
    event.stopPropagation(); // Prevent click from navigating to detail page
    if (!cart.some((item) => item.id === product.id)) {
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
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-2xl p-5 flex flex-col rounded-md justify-center items-center gap-2 cursor-pointer transition-transform hover:scale-105"
              onClick={() => navigate("/DetailView", { state: { product } })}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[250px] h-[250px] rounded-md shadow-lg object-cover"
              />
              <h1 className="font-semibold text-lg">{product.title}</h1>
              <h1 className="text-gray-700">₹{product.price}/-</h1>
              <div className="flex justify-between w-full px-4">
                <FaHeart
                  className={`cursor-pointer text-lg ${
                    wishlist.some((item) => item.id === product.id) ? "text-red-500" : "text-gray-400"
                  }`}
                  onClick={(e) => handleAddToWishlist(product, e)}
                />
                <FaShoppingCart
                  className={`cursor-pointer text-lg ${
                    cart.some((item) => item.id === product.id) ? "text-green-500" : "text-gray-400"
                  }`}
                  onClick={(e) => handleAddToCart(product, e)}
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

export default Necklace;
