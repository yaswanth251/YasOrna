import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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

const Slider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        effect="fade"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-md">
                  {image.alt}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;