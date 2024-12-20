import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Navigation, Pagination } from "swiper/modules";

const Studentlove = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sahana",
      role: "Student",
      text: "The counselor helped me a lot in finding my college. She reduced my burden of finding my dream college.",
    },
    {
      id: 2,
      name: "Preeya Kamatagi",
      role: "Student",
      text: "I was searching for a good college in Bengaluru. Tasneem Banu Ma'am guided me so well.",
    },
    {
      id: 3,
      name: "R. Priya Dharshini",
      role: "Student",
      text: "Geetha provided a lot of information about courses to help me with the next step in my career.",
    },
    {
      id: 4,
      name: "Rohan",
      role: "Student",
      text: "I am very happy with the guidance I received. It helped me make an informed decision about college.",
    },
    {
      id: 5,
      name: "Anjali",
      role: "Student",
      text: "This platform made my college search so easy and stress-free. I couldn’t be happier!",
    },
    {
      id: 6,
      name: "Varun",
      role: "Student",
      text: "The advice I received was extremely helpful and guided me toward the best college for my goals.",
    },
    {
      id: 7,
      name: "Jonty",
      role: "Student",
      text: "The advice I received was extremely helpful and guided me toward the best college for my goals.",
    },
    {
      id: 8,
      name: "Sumit",
      role: "Student",
      text: "The advice I received was extremely helpful and guided me toward the best college for my goals.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
      <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        Our Students Love Us!
      </h2>

      {/* SwiperJS Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablets: 2 items
          1024: { slidesPerView: 3 }, // Large screens: 3 items
        }}
        className="rounded-xl"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-blue-500 text-white rounded-lg shadow-lg p-4 sm:p-6 h-48 sm:h-56 flex flex-col justify-between">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-4">
                {testimonial.text}
              </p>
              <div>
                <h3 className="font-bold text-base sm:text-lg">{testimonial.name}</h3>
                <p className="text-xs sm:text-sm">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Studentlove;
