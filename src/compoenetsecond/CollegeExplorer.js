import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CollegeExplorer = () => {
  const nearbyRef = useRef(null);
  const feesRef = useRef(null);
  const similarRef = useRef(null);

  const scroll = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' 
        ? ref.current.scrollLeft - scrollAmount
        : ref.current.scrollLeft + scrollAmount;
      
      ref.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const CardSection = ({ title, items, scrollRef }) => (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[300px] p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.logo || '/placeholder.svg?height=40&width=40'}
                  alt={`${item.name} logo`}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('left', scrollRef)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 disabled:opacity-50"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right', scrollRef)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 disabled:opacity-50"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const nearbyColleges = [
    { name: 'Shivajirao S. Jondhale College of Engineering Thane', logo: '/placeholder.svg?height=40&width=40' },
    { name: 'VIVA Institute of Technology', logo: '/placeholder.svg?height=40&width=40' },
    { name: 'S.H. Jondhale Polytechnic', logo: '/placeholder.svg?height=40&width=40' },
    { name: 'Muchhala Polytechnic', logo: '/placeholder.svg?height=40&width=40' },
  ];

  const feeDetails = [
    { name: 'PICT Pune Fees', logo: '/placeholder.svg?height=40&width=40' },
    { name: 'Army Institute of Technology (AIT), Pune Fees', logo: '/placeholder.svg?height=40&width=40' },
    { name: 'Sanjay Ghodawat University Fees', logo: '/placeholder.svg?height=40&width=40' },
    { name: 'Sandip University Fees', logo: '/placeholder.svg?height=40&width=40' },
  ];

  const similarColleges = [
    { name: 'Pinnacle School of Business Management', logo: '/placeholder.svg?height=40&width=40' },
    { name: 'FINPLAN - International Institute of Management (FINPLAN), Thane', logo: '/placeholder.svg?height=40&width=40' },
    { name: 'Swayam Siddhi College of Management & Research', logo: '/placeholder.svg?height=40&width=40' },
    { name: 'Matoshri Ushatai Jadhav Institute of Management Studies & Research Centre', logo: '/placeholder.svg?height=40&width=40' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F0F1FF]">
      <CardSection 
        title="Explore NearBy Colleges" 
        items={nearbyColleges} 
        scrollRef={nearbyRef}
      />
      
      <CardSection 
        title="Fee Details of Popular Colleges" 
        items={feeDetails} 
        scrollRef={feesRef}
      />
      
      <CardSection 
        title="Similar Colleges" 
        items={similarColleges} 
        scrollRef={similarRef}
      />
    </div>
  );
};

export default CollegeExplorer;

