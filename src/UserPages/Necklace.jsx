import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserHome from "./UserHome";
import Foot from "./Foot";


const products = [
  {
    id: "necklace-1",
    image:
      "https://www.pngall.com/wp-content/uploads/8/Gold-Jewellery-Necklace-PNG-Free-Download.png",
    price: 79000,
  },
  {
    id: "necklace-2",
    image:
      "https://pnghq.com/wp-content/uploads/necklace-png-transparent-elements.png",
    price: 75000,
  },
  {
    id: "necklace-3",
    image:
      "https://clipart-library.com/image_gallery2/Jewellery-PNG-Picture.png",
    price: 80000,
  },
  {
    id: "necklace-4",
    image:
      "https://i.pinimg.com/originals/e0/43/3a/e0433ac5b79a2642067641e75f510a9b.png",
    price: 85000,
  },
  {
    id: "necklace-5",
    image:
      "http://www.pngmart.com/files/1/Jewellery-Necklace-Transparent-PNG.png",
    price: 21999,
  },
  {
    id: "necklace-6",
    image: "https://www.pngmart.com/files/22/Jewelry-PNG-Isolated-HD.png",
    price: 15999,
  },
  {
    id: "necklace-7",
    image: "https://purepng.com/public/uploads/large/love-pendant-ych.png",
    price: 69155,
  },
  {
    id: "necklace-8",
    image:
      "https://www.pngall.com/wp-content/uploads/8/Gold-Necklace-PNG-Picture.png",
    price: 98000,
  },
  {
    id: "necklace-9",
    image:
      "https://www.pngarts.com/files/3/Necklace-Jewellery-Set-PNG-Image.png",
    price: 28999,
  },
  {
    id: "necklace-10",
    image: "https://www.pngarts.com/files/3/Jewellery-PNG-Picture.png",
    price: 19999,
  },
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
        <h1 className="text-3xl text-center text-amber-800">
          Hand Picked for You
        </h1>
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
                    wishlist.some((item) => item.id === product.id)
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                  onClick={(e) => handleAddToWishlist(product, e)}
                />
                <FaShoppingCart
                  className={`cursor-pointer text-lg ${
                    cart.some((item) => item.id === product.id)
                      ? "text-green-500"
                      : "text-gray-400"
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
