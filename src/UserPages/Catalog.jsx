import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ProductView from "./ProductView";

import Bangle17 from "../assets/Images/products/Bangles/image417.png";
import Bangle18 from "../assets/Images/products/Bangles/image418.png";
import Bangle19 from "../assets/Images/products/Bangles/image419.png";
import Bangle20 from "../assets/Images/products/Bangles/image420.png";
import Bangle21 from "../assets/Images/products/Bangles/image421.png";
import Bangle22 from "../assets/Images/products/Bangles/image415.png";
import Bangle23 from "../assets/Images/products/Bangles/image435.png";
import Bangle24 from "../assets/Images/products/Bangles/image425.png";
import Bangle25 from "../assets/Images/products/Bangles/image429.png";
import Bangle26 from "../assets/Images/products/Bangles/image427.png";

import Necklace1 from "../assets/Images/products/Necklace/image1021.png";
import Necklace2 from "../assets/Images/products/Necklace/image1031.png";
import Necklace3 from "../assets/Images/products/Necklace/image1041.png";
import Necklace4 from "../assets/Images/products/Necklace/image1081.png";
import Necklace5 from "../assets/Images/products/Necklace/image1021.png";
import Necklace6 from "../assets/Images/products/Necklace/image1022.png";
import Necklace7 from "../assets/Images/products/Necklace/image1024.png";
import Necklace8 from "../assets/Images/products/Necklace/image1026.png";
import Necklace9 from "../assets/Images/products/Necklace/image1025.png";
import Necklace10 from "../assets/Images/products/Necklace/image1054.png";

const initialProducts = [
  { id: "bangles", title: "Bangles", items: [
    { id: "bangle-1", image: Bangle17, price: 45500 },
    { id: "bangle-2", image: Bangle18, price: 59500 },
    { id: "bangle-3", image: Bangle19, price: 59500 },
    { id: "bangle-4", image: Bangle20, price: 60900 },
    { id: "bangle-5", image: Bangle21, price: 95500 },
    { id: "bangle-6", image: Bangle22, price: 69500 },
    { id: "bangle-7", image: Bangle23, price: 39500 },
    { id: "bangle-8", image: Bangle24, price: 80900 },
    { id: "bangle-9", image: Bangle25, price: 99999 },
    { id: "bangle-10", image: Bangle26, price: 12999 },
  ] },
  { id: "necklaces", title: "Necklaces", items: [
    { id: "necklace-1", image: Necklace1, price: 79000 },
    { id: "necklace-2", image: Necklace2, price: 75000 },
    { id: "necklace-3", image: Necklace3, price: 80000 },
    { id: "necklace-4", image: Necklace4, price: 85000 },
    { id: "necklace-5", image: Necklace5, price: 21999 },
    { id: "necklace-6", image: Necklace6, price: 15999 },
    { id: "necklace-7", image: Necklace7, price: 69155 },
    { id: "necklace-8", image: Necklace8, price: 98000 },
    { id: "necklace-9", image: Necklace9, price: 28999 },
    { id: "necklace-10", image: Necklace10, price: 19999 },
  ] },
];

const Catalog = () => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const sortedProducts = useMemo(() => {
    if (!sortType) return initialProducts;
    return initialProducts.map((category) => ({
      ...category,
      items: [...category.items].sort((a, b) =>
        sortType === "lowToHigh" ? a.price - b.price : b.price - a.price
      ),
    }));
  }, [sortType]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  return (
    <div className="min-h-screen py-5">
      <h1 className="text-3xl text-center text-amber-800">Hand Picked for You</h1>
      <hr className="opacity-25 mb-5" />
      <div className="flex justify-end gap-4 mb-3 p-10">
        <button className="px-3 py-1 rounded-md bg-gray-200" onClick={() => setSortType("lowToHigh")}>Sort: Low to High</button>
        <button className="px-3 py-1 rounded-md bg-gray-200" onClick={() => setSortType("highToLow")}>Sort: High to Low</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sortedProducts.map((category) =>
          category.items.map((product) => (
            <ProductView key={product.id} product={product} onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />
          ))
        )}
      </div>
    </div>
  );
};

export default Catalog;
