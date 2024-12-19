import React from "react";
import image1 from '../compoenetsecond/iamge/galleryIcon.d57141d9.webp';
import image2 from '../compoenetsecond/iamge/alamuri.jpg';
import image3 from '../compoenetsecond/iamge/1423247334.jpg';

const AlamuriInstitute = () => {
  return (
    <div className="w-full mx-auto bg-white shadow-md gap-44 rounded-lg p-6 flex flex-col lg:flex-row justify-between items-center">
      {/* Left Section: Content */}
      <div className="flex-1 lg:pr-8">
        <img src={image3} className="m-3 border-2 border-gray-300" />
        
        {/* Title and Subtitle */}
        <div className="mb-4">
          <p className="text-2xl font-semibold leading-tight">
            Alamuri Ratnamala Institute of Engineering
          </p>
          <p className="text-2xl font-semibold">and Technology Campus Facilities - Hostel</p>
          <p className="text-2xl font-semibold">Fees, Infrastructure, Address</p>
          <p className="text-gray-500 text-sm mt-1">
            Campus Facilities - Hostel Fees, Infrastructure, Address
          </p>
        </div>

        {/* Ratings and Popularity */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
            <span className="font-bold text-sm">3.5</span>
            <span className="ml-1 text-gray-500 text-sm">(6 Reviews)</span>
          </div>
          <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-md">
            Popular
          </span>
          
        </div>
        

        {/* Location and Gallery */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Thane</span> (Maharashtra)
          </p>
          <div className="flex">
            <img src={image1} />
            <a href="#" className="text-blue-500 text-sm underline p-3">
              Gallery
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded-md">
            Download Brochure
          </button>
          <button className="bg-blue-600 text-sm text-white px-4 py-2 rounded-md">
            Apply Now
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="mt-6 lg:mt-0 w-full lg:w-1/2">
        <div className="rounded-lg overflow-hidden">
          <img
            src={image2}
            className="w-full h-auto rounded-bl-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AlamuriInstitute;
