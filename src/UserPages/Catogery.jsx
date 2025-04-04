import React from "react";
import { useNavigate } from "react-router-dom";

import Necklace from "../assets/Images/products/Necklace/image917.png";
import Bangle from "../assets/Images/products/Bangles/image1609.png";
import RingDiamong from "../assets/Images/products/Ring/image45.jpg";

import Necklace1 from "../assets/Images/products/Necklace/image1007.png";
import Necklacelong1 from "../assets/Images/products/Earrings/image213.png";
import Bangle1 from "../assets/Images/products/Bangles/image399.png";
import RingDiamong1 from "../assets/Images/products/Ring/image188.jpg";
import Earring1 from "../assets/Images/products/Earrings/image730.png";
import Earring2 from "../assets/Images/products/Earrings/image10.png";
import Necklace2 from "../assets/Images/products/Necklace/image10.png";
import Bangle2 from "../assets/Images/products/Bangles/image450.png";
import RingDiamong2 from "../assets/Images/products/Ring/image20.jpg";

const navigationMap = {
  "Fashion Necklace": "/Necklace",
  "Cuff Bangles": "/Bangles",
  "Gold Ring": "/Ring",
  "Rope Necklace": "/Earrings",
  "Jhumkas": "/Earrings",
  "Necklace Set": "/Necklace",
  "Diamond Jewellery": "/Ring",
  "Bangles": "/Bangles",
  "Earrings": "/Earrings",
  "Long Necklace": "/Necklace",
};

const categorie = [
  { name: "Fashion Necklace", image: Necklace1 },
  { name: "Cuff Bangles", image: Bangle1 },
  { name: "Gold Ring", image: RingDiamong1 },
  { name: "Earring", image: Necklacelong1 },
  { name: "Jhumkas", image: Earring1 },
  { name: "Necklace Set", image: Necklace },
  { name: "Diamond Jewellery", image: RingDiamong },
  { name: "Bangles", image: Bangle },
  { name: "Elegant Earrings", image: Earring2 },
  { name: "Royal Necklace", image: Necklace2 },
  { name: "Classic Bangles", image: Bangle2 },
  { name: "Luxury Ring", image: RingDiamong2 },
];

const CategoryCard = ({ name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigationMap[name]) {
      navigate(navigationMap[name]);
    }
  };

  return (
    <div
      className="flex flex-col items-center bg-white rounded-2xl shadow-lg overflow-hidden h-[230px] w-full sm:w-[230px] cursor-pointer transform transition duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[180px] object-cover shadow-md p-1"
      />
      <div className="w-full bg-gradient-to-b from-transparent to-pink-100 p-3 text-center">
        <p className="text-lg font-semibold text-gray-700">{name}</p>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-2xl font-semibold text-[#76212A] mb-6">
        Embrace Bridal Collection
      </h2>

      {/* Category Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-items-center">
        {categorie.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
