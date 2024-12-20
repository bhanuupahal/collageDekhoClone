import React, { useState } from "react";
import alamuri1 from "../compoenetsecond/iamge/alamuri (1).jpg";
import alamuri from "../compoenetsecond/iamge/alamuri.jpg";
import alamuri3 from "../compoenetsecond/iamge/alamuri3.jpeg";
import alamuri4 from "../compoenetsecond/iamge/alamuri4.jpg";
import amamuri1 from "../compoenetsecond/iamge/amamuri1.jpg";
import parliament from "../compoenetsecond/iamge/parliament_of_india.jpg";
import placeholder from "../compoenetsecond/iamge/placeholder-alumni.svg"

function CampusFacilities() {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  const facilities = [
    { name: "AV Lab", icon: "🖥" },
    { name: "Auditorium", icon: "🎭" },
    { name: "ATM", icon: "💳" },
    { name: "Boys Hostel", icon: "🏠" },
    { name: "Canteen", icon: "🍽" },
    { name: "Computer Lab", icon: "💻" },
    { name: "CSC", icon: "🏢" },
    { name: "Gym", icon: "💪" },
    { name: "Library", icon: "📚" },
    { name: "Medical Facilities", icon: "🏥" },
    { name: "Cls. Room", icon: "📝" },
    { name: "Sports", icon: "⚽" },
    { name: "WiFi", icon: "📶" },
    { name: "Cafeteria", icon: "☕" },
    { name: "Laboratories", icon: "🔬" },
  ];

  const images = [
    { url: "/placeholder.svg", alt: "College Building" },
    { url: "/placeholder.svg", alt: "Library" },
    { url: "/placeholder.svg", alt: "Computer Lab" },
    { url: "/placeholder.svg", alt: "Classroom" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* FAQs Section */}
      <div className="border rounded-lg">
        <h2 className="text-xl font-bold p-6">
          Alamuri Ratnamala Institute of Engineering and Technology FAQs
        </h2>
        <div className="border-t">
          <button
            onClick={() => setIsQuestionOpen(!isQuestionOpen)}
            className="w-full flex justify-between items-center p-6 hover:bg-gray-50"
          >
            <span>Is ARMIET, Thane a government college?</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                isQuestionOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isQuestionOpen && (
            <div className="px-6 pb-6">
              <p className="text-gray-600">Answer content goes here...</p>
            </div>
          )}
        </div>
      </div>

      {/* Ask Question Banner */}
      <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Are you Confused?</h3>
            <p className="text-gray-600">
              Ask anything and get answer in 48 hours
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Ask A Question
            </button>
          </div>
          <div className="w-64 h-48">
            <img
              src="/placeholder.svg"
              alt="Question illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Campus Facilities Section */}
      <div>
        <h2 className="text-xl font-bold mb-6">
          Alamuri Ratnamala Institute of Engineering and Technology Campus
          Facilities and Infrastructure
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-medium mb-4">Campus Facilities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg space-y-2"
              >
                <span className="text-2xl">{facility.icon}</span>
                <span className="text-sm text-center">{facility.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-8 relative">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <img
              src={images[currentImage].url}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover"
            />
            <div className="grid grid-cols-5">
              <div>
                <img src={alamuri1} />
              </div>
              <div>
                <img src={alamuri3} />
              </div>
              <div>
                <img src={alamuri4} />
              </div>
              <div>
                <img src={amamuri1} />
              </div>
              <div>
                <img src={parliament} />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full ${
                  currentImage === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentImage(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setCurrentImage((prev) => (prev + 1) % images.length)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampusFacilities;
