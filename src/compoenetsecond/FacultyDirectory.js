import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Building, Mail, Phone, Globe } from 'lucide-react';
import placeholer from "../compoenetsecond/iamge/placeholder-alumni.svg"

const FacultyDirectory = () => {
  const facultyMembers = [
    { name: 'Dr. Ashwini Kshirsagar', imageUrl: '/placeholder.svg?height=100&width=100' },
    { name: 'Dr. Sandip B. Dhobale', imageUrl: '/placeholder.svg?height=100&width=100' },
    { name: 'Mr. Hitesh Balaram Patil', imageUrl: '/placeholder.svg?height=100&width=100' },
    { name: 'Mr. Manojkumar Agrawal', imageUrl: '/placeholder.svg?height=100&width=100' },
    { name: 'Mr. Mukesh Kumar', imageUrl: '/placeholder.svg?height=100&width=100' },
  ];

  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* Faculty Header */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
        Alamuri Ratnamala Institute of Engineering and Technology Faculty
      </h2>

      {/* Faculty Carousel */}
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar"
        >
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="flex-none w-[250px] p-6 bg-[#F0F1FF] rounded-lg flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden bg-white mb-4">
                <img
                  src={placeholer}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center text-sm font-medium text-gray-900">
                {faculty.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Contact Details Section */}
      <div className="mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          Alamuri Ratnamala Institute of Engineering and Technology Contact Details
        </h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h3 className="font-semibold text-lg text-gray-900">College Location</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-gray-600">
              <Building className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>Campus: ARMIET, A.S Rao Nagar, Sapgaon, Shahapur Head Office: 124, Vardhaman Industrial Estate, Gokul Nagar, Thane W</p>
            </div>
            
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:info@armiet.com" className="hover:text-blue-600">
                info@armiet.com
              </a>
            </div>
            
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <div>
                <a href="tel:+918879648603" className="hover:text-blue-600">+91-8879648603</a>,{' '}
                <a href="tel:+919223515071" className="hover:text-blue-600">+91-9223515071</a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-600">
              <Globe className="w-5 h-5 flex-shrink-0" />
              <a 
                href="https://armiet.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                https://armiet.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDirectory;

