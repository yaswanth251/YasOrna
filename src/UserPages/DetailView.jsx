import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaCreditCard } from "react-icons/fa";
import UserHome from "./UserHome";
import Foot from "./Foot";

const similarProducts = [
  { id: 2, image: "../assets/Images/products/Necklace/image18.png", title: "Diamond Necklace", price: 22000 },
  { id: 3, image: "../assets/Images/products/Necklace/image19.png", title: "Ruby Necklace", price: 18000 },
  { id: 4, image: "../assets/Images/products/Necklace/image20.png", title: "Emerald Necklace", price: 19900 },
];

const DetailView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return <div className="text-center text-xl mt-10 text-red-500">Product details not found.</div>;
  }

  const handleBuyNow = () => {
    navigate("/Checkout", { state: { product } });
  };

  return (
    <>
      <UserHome />
      <div className="mt-24 mx-auto max-w-5xl relative top-10 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute -top-[100px] -left-40 text-lg bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition"
        >
          ⬅ Back
        </button>

        {/* Product Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 w-96 object-cover rounded-lg shadow-lg transition hover:scale-105"
          />
          <div className="flex gap-4 mt-4">
            <button
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md transition"
            >
              <FaShoppingCart /> Add to Cart
            </button>
            <button
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md transition"
            >
              <FaHeart /> Add to Wishlist
            </button>
            <button
              onClick={handleBuyNow}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md transition"
            >
              <FaCreditCard /> Buy Now
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4">Elegant handcrafted {product.title.toLowerCase()} perfect for every occasion.</p>
          <p className="text-lg font-semibold text-gray-900">Price: ₹{product.price}/-</p>

          {/* Delivery Date */}
          <div className="mt-4">
            <p className="text-gray-600 font-bold">Expected Delivery:</p>
            <p className="text-gray-800">April 15 - April 18, 2025</p>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-12 mx-auto max-w-6xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-2xl p-5 flex flex-col rounded-md justify-center items-center gap-2 cursor-pointer transition-transform hover:scale-105"
              onClick={() => navigate("/DetailView", { state: { product: item } })}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[200px] h-[200px] rounded-md shadow-lg object-cover"
              />
              <h1 className="font-semibold">{item.title}</h1>
              <h1 className="text-gray-700">₹{item.price}/-</h1>
            </div>
          ))}
        </div>
      </div>

      <Foot />
    </>
  );
};

export default DetailView;
