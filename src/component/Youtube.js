import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Swiper navigation styles
import "swiper/css/pagination"; // Swiper pagination styles
import { Navigation, Pagination } from "swiper/modules";

const Youtube = () => {
  const slides = [
    "https://www.youtube.com/embed/IWGNR7TbrFg?start=4", // First video
    "https://www.youtube.com/embed/iOIsemcUjNQ",         // Second video
    "https://www.youtube.com/embed/h1ib_3FWTog",         // Third video
    "https://www.youtube.com/embed/Y4C0TM8XKyw",         // Fourth video
    "https://www.youtube.com/embed/SsxawQCEXBk",         // Fifth video
    "https://www.youtube.com/embed/Zl1lsV341u0?start=1", // Sixth video
  ];

  return (
    <div className="relative mx-auto mt-16 w-full max-w-7xl px-4">
      {/* Title */}
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-800">
        Top Colleges Recommended For You
      </div>

      {/* SwiperJS Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="rounded-xl"
      >
        {slides.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <iframe
                src={url}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Video ${index + 1}`}
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Youtube;
