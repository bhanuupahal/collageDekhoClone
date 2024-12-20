import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";

const ExamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const examLinks = [
    'CAT Application Form 2024',
    'XAT Exam Date 2025',
    'CAT Exam Date 2024',
    'XAT Application Form 2025'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % examLinks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + examLinks.length) % examLinks.length);
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#F4A460] to-[#FFA500]">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex md:flex-row flex-col items-center gap-4 ">
          {/* Google Rating - Visible on all screens */}
          <div className="flex items-center   gap-2 min-w-fit  ">
           <FcGoogle/>

            <span className="text-xl font-medium">4.2</span>
            <div className="flex items-center">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg
                className="w-5 h-5 text-gray-300 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>

          {/* Desktop Slider - Hidden on mobile */}
          <div className="hidden md:flex flex-1 items-center justify-between gap-4">
            <button
              onClick={prevSlide}
              className="p-1 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex-1 flex justify-center gap-8">
              {examLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-center font-medium hover:underline ${
                    index === currentSlide ? 'text-black' : 'text-black/70'
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-1 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Slider - Hidden on desktop */}
          <div className="flex md:hidden flex-1 items-center justify-between">
            <button
              onClick={prevSlide}
              className="p-1 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <a
              href="#"
              className="text-center font-medium"
            >
              {examLinks[currentSlide]}
            </a>

            <button
              onClick={nextSlide}
              className="p-1 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSlider;

