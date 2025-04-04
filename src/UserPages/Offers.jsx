import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import banner1 from "../assets/Images/products/Offers/ban6.webp";
import banner4 from "../assets/Images/products/Offers/ban4.webp";
import banner5 from "../assets/Images/products/Offers/ban5.png";

const images = [
  { url: banner4, alt: "Elegant Wedding Jewellery" },
  { url: banner5, alt: "Elegant Wedding Jewellery" },
  { url: banner1, alt: "Bridal Jewelry Collection" },
];

function Offers() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="text-center bg-white py-8 px-4 shadow-md rounded-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          50% <span className="text-red-600">OFF On Making Charges</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto my-2"></div>
        <p className="text-lg text-gray-700 font-semibold">
          Flat 5% OFF on orders above ₹11,999 + Additional Festive Discounts!
        </p>
        <div className="mt-4 inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base">
          <span>Use Code:</span>
          <span className="bg-white text-red-600 px-3 py-1 ml-2 rounded-full">
            YasOrna10
          </span>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-auto md:h-[500px] mt-6"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-full">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-8 px-4">
        <h3 className="text-2xl font-bold text-gray-800">Limited Time Offer!</h3>
        <p className="text-lg text-gray-600 mt-2">
          Enjoy exclusive deals on our exquisite jewelry collections. Don't miss out!
        </p>
        <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md hover:bg-red-700">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Offers;
