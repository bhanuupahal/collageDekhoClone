import React from 'react';

function CTABanner() {
  return (
    <div className="bg-[#0a0627] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left mb-4 sm:mb-0">
            Want to know more about Alamuri Ratnamala Institute of Engineering and
            Technology?
          </h2>
          <div className="flex items-center space-x-4">
            <button className="bg-[#f4b266] text-black px-6 py-2 rounded-md hover:bg-[#f4b266]/90 transition-colors">
              Download Brochure
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
             
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTABanner;