import React from 'react';
import background from "../component/images/banner-image.f12c9bbc.webp";
import { Play } from 'lucide-react';

const Brightfuture = () => {
  return (
    <div className="relative w-full">
    
      <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden">
        <img  className="w-full h-full object-cover"
          src={background} alt="ghjk" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative md:min-h-[600px] px-4 py-8 md:py-16 max-w-7xl mx-auto">
        <div className="md:max-w-2xl">
          {/* Text Content */}
          <h1 className="text-[40px] md:text-[56px] font-bold leading-tight md:text-white text-[#1F1F3D] mb-4">
            Right Guidance,
            <br />
            Bright Future
          </h1>
          
          <p className="text-lg md:text-xl md:text-white text-[#1F1F3D] mb-8">
            Guiding lakhs of students and parents to find the right college. Building a better future for India,{' '}
            <span className="text-[#FF9B3F]">one student at a time.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button className="w-full md:w-auto px-6 py-3 bg-[#FF9B3F] text-white rounded-md hover:bg-[#f08b2f] transition-colors text-center font-medium">
              Find Your College
            </button>
            <button className="w-full md:w-auto px-6 py-3 border-2 border-[#FF9B3F] text-[#FF9B3F] rounded-md hover:bg-[#FF9B3F] hover:text-white transition-colors text-center font-medium">
              Get Job Ready Degree
            </button>
          </div>

          {/* Video Thumbnail - Shown only on Mobile */}
          <div className="md:hidden relative rounded-lg overflow-hidden">
            <img
              src={background}
              alt="Brand video thumbnail"
              className="w-full h-auto"
            />
            <button 
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
              aria-label="Play brand video"
            >
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="w-8 h-8 text-[#FF9B3F] ml-1" />
              </div>
            </button>
          </div>

          {/* Watch Film Link - Shown only on Desktop */}
          <a 
            href="#" 
            className="hidden md:inline-flex items-center text-[#FF9B3F] hover:text-[#f08b2f] transition-colors"
          >
            Watch our brand film here
          </a>
        </div>
      </div>

      {/* Desktop Video Play Button Overlay */}
      <button 
        className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-colors"
        aria-label="Play brand video"
      >
        <Play className="w-10 h-10 text-[#FF9B3F] ml-1" />
      </button>
    </div>
  );
};

export default Brightfuture;

