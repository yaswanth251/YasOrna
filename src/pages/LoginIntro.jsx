import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import images dynamically
import MailIcon from "../assets/Images/mail.png";
import banner1 from "../assets/Images/main-back.jpg";
import banner2 from "../assets/Images/products/Banners/banner6.jpg";
import banner3 from "../assets/Images/products/Banners/banner3.png";
import banner5 from "../assets/Images/products/Banners/banner11.jpg";
import banner7 from "../assets/Images/products/Banners/banner7.jpg";

const images = [
  { url: banner1, alt: "Bridal Jewelry Collection" },
  { url: banner2, alt: "Exclusive Necklace Set" },
  { url: banner3, alt: "Elegant Wedding Jewellery" },
  { url: banner5, alt: "Elegant Wedding Jewellery" },
  { url: banner7, alt: "Elegant Wedding Jewellery" },
];

function LoginIntro() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen flex flex-col">
      {/* Background Swiper */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Header */}
      <header className="relative flex justify-between items-center p-5">
        <div className="flex items-center">
          <img src={""} className="w-[80px] h-[80px]" alt="Gem Icon" />
          <div className="text-3xl text-white font-bold ml-3 tracking-wide">
            YasOrna
          </div>
        </div>
        <div className="flex items-center gap-3 text-white text-lg">
          <a href="mailto:support@gmail.com" className="hover:text-amber-400 transition">
            Contact Us
          </a>
          <img src={MailIcon} className="w-8 h-8" alt="Mail Icon" />
        </div>
      </header>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center text-center h-[70vh] px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-4xl text-white font-bold">Login</h2>
          <p className="text-lg text-gray-300 mt-2">Select an option</p>

          <div className="mt-6 flex flex-col gap-4">
            {/* Admin Login Button */}
            <button
              className="w-full bg-amber-700 py-2 rounded-lg text-white font-semibold hover:bg-amber-600 transition"
              onClick={() => navigate("/AdminLogin")}
            >
              Admin Login
            </button>

            {/* User Login Button */}
            <button
              className="w-full bg-amber-700 py-2 rounded-lg text-white font-semibold hover:bg-amber-600 transition"
              onClick={() => navigate("/UserLogin")}
            >
              User Login
            </button>
          </div>
        </div>
      </div>

      {/* Back to Register */}
      <button
        className="absolute bottom-12 left-[50%] translate-x-[-50%] text-white text-lg px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg hover:bg-orange-400 hover:text-black transition"
        onClick={() => navigate("/")}
      >
        Not Registered? Register Here
      </button>
    </div>
  );
}

export default LoginIntro;
