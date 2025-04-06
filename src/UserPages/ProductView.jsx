import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaCreditCard } from "react-icons/fa";

export default function ProductView({
  product,
  onAddToCart,
  onAddToWishlist,
}) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // ✅ You forgot this line

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleBuyNow = () => {
    navigate("/Payment", { state: { product, quantity } }); // ✅ Navigating with state
  };
 
  

  return (
    <div className="bg-white shadow-lg p-5 flex flex-col rounded-lg justify-center items-center gap-2 cursor-pointer transition-transform hover:scale-105 w-full max-w-xs">
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 rounded-lg object-cover"
      />
      <h1 className="text-lg font-semibold text-center">{product.title}</h1>
      <h2 className="text-xl font-bold text-amber-600">₹{product.price}/-</h2>

      <div className="flex items-center gap-2 mt-2">
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={handleDecreaseQuantity}
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>

      <div className="flex justify-between w-full px-4 mt-2">
        <FaHeart
          className="text-red-500 cursor-pointer text-lg hover:scale-110 transition-transform"
          onClick={() => onAddToWishlist && onAddToWishlist(product)}
        />
        <FaShoppingCart
          className="text-green-500 cursor-pointer text-lg hover:scale-110 transition-transform"
          onClick={() => onAddToCart  && onAddToCart({ ...product, quantity })}
        />
      </div>

      <button
        onClick={handleBuyNow}
        className="flex items-center gap-2 bg-blue-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md transition"
      >
        <FaCreditCard /> Buy Now
      </button>
    </div>
  );
}
