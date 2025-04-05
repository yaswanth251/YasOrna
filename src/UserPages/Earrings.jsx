import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserHome from "./UserHome";
import Foot from "./Foot";


const products = [
  {
    image:
      "https://www.pngall.com/wp-content/uploads/8/Earring-PNG-Download-Image.png",
    title: "Gold Earrings",
    price: 4500,
  },
  {
    image:
      "https://clipground.com/images/png-gold-earrings-1.png",
    title: "Diamond Earrings",
    price: 13000,
  },
  {
    image:
      "https://www.pngmart.com/files/23/Earring-PNG-Isolated-HD.png",
    title: "Ruby Earrings",
    price: 8000,
  },
  {
    image:
      "https://static01.srikrishna.com/DealImages/7133/ZoomImages/ear193121.png",
    title: "Emerald Earrings",
    price: 9900,
  },
  {
    image:
      "https://www.pngmart.com/files/23/Gold-Earrings-PNG-HD-Isolated.png",
    title: "Sapphire Earrings",
    price: 11500,
  },
  {
    image:
      "https://www.pngall.com/wp-content/uploads/8/Earring-PNG-File-Download-Free.png",
    title: "Platinum Earrings",
    price: 16000,
  },
  {
    image:
      "https://pnghq.com/wp-content/uploads/buy-gold-earrings-online-64053.png",
    title: "Rose Gold Earrings",
    price: 8900,
  },
  {
    image:
      "https://cdn0.rubylane.com/shops/1231960/Earr-614.1L.jpg",
    title: "Silver Earrings",
    price: 4200,
  },
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
        <h1 className="text-3xl text-center text-amber-800">
          Hand Picked for You
        </h1>
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
                  className={`cursor-pointer text-lg ${
                    wishlist.some((item) => item.image === product.image)
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToWishlist(product);
                  }}
                />
                <FaShoppingCart
                  className={`cursor-pointer text-lg ${
                    cart.some((item) => item.image === product.image)
                      ? "text-green-500"
                      : "text-gray-400"
                  }`}
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
