import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserHome from "./UserHome";
import Foot from "./Foot";
import DetailView from "./DetailView";

const products = [
  {
    id: "bangle-1",
    image:
      "https://png.pngtree.com/png-vector/20240627/ourmid/pngtree-exquisite-gold-bangles-for-a-perfect-wedding-look-png-image_12891744.png",
    price: 45500,
  },
  {
    id: "bangle-2",
    image:
      "https://admin.pngadgil1832.com/UploadedFiles/ProductImages/KGNSET27_2GPNG_02.png",
    price: 59500,
  },
  {
    id: "bangle-3",
    image:
      "https://admin.pngadgil1832.com/UploadedFiles/ProductImages/KGNSET27_2GPNG_01.png",
    price: 59500,
  },
  {
    id: "bangle-4",
    image:
      "https://static.vecteezy.com/system/resources/previews/045/092/598/non_2x/choose-the-perfect-bangles-for-any-occasion-free-png.png",
    price: 60900,
  },
  {
    id: "bangle-5",
    image:
      "https://static.vecteezy.com/system/resources/previews/045/092/598/non_2x/choose-the-perfect-bangles-for-any-occasion-free-png.png",
    price: 95500,
  },
  {
    id: "bangle-6",
    image:
      "https://i.pinimg.com/originals/5e/99/7b/5e997be7900473465238ac9c4cae0b6c.png",
    price: 69500,
  },
  {
    id: "bangle-7",
    image: "https://cdn0.rubylane.com/shops/mur-sadies/MS006789.1L.jpg",
    price: 39500,
  },
  {
    id: "bangle-8",
    image:
      "https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-beautiful-rajwari-kadda-bangles-clipart-png-image_12510842.png",
    price: 80900,
  },
  {
    id: "bangle-9",
    image:
      "https://png.pngtree.com/png-clipart/20230701/ourmid/pngtree-indian-traditional-female-jewelry-bangles-png-image_7370186.png",
    price: 99999,
  },
  {
    id: "bangle-10",
    image:
      "https://static.vecteezy.com/system/resources/previews/045/092/645/non_2x/exploring-the-world-of-bangles-free-png.png",
    price: 12999,
  },
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

export default Bangles;
