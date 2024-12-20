import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

// Import your images
import image1 from "../compoenetsecond/allimages/1421771178_G4LDclw.jpg";
import image2 from "../compoenetsecond/allimages/1423588402.jpg";
import image3 from "../compoenetsecond/allimages/1442991790.jpg";
import image4 from "../compoenetsecond/allimages/1423588904.jpg";
import image5 from "../compoenetsecond/allimages/1431669211.jpeg";
import image6 from "../compoenetsecond/allimages/1433937666.jpg";
import image7 from "../compoenetsecond/allimages/1435570841_B0E0VHe.jpg";
import image8 from "../compoenetsecond/allimages/1442154843.jpg";
import image9 from "../compoenetsecond/allimages/1442991790.jpg";
import image10 from "../compoenetsecond/allimages/1453195478.jpg";
import image11 from "../compoenetsecond/allimages/292040941_2272492752913115_4637554168687325275_n.jpg";
import image12 from "../compoenetsecond/allimages/DFAS.png";
import image13 from "../compoenetsecond/allimages/ICT_Mumbai_logo.png";
import image14 from "../compoenetsecond/allimages/JEE_Main_Preparation_Tips_For_Guaranteed_Success.png";
import image15 from "../compoenetsecond/allimages/KCET_2025.png";
import image16 from "../compoenetsecond/allimages/KCET_JJxKATJ.png";
import image17 from "../compoenetsecond/allimages/Logo_RIT_108x108.png";
import image18 from "../compoenetsecond/allimages/Untitled_design_10_GPSyhLK.png";
import image19 from "../compoenetsecond/allimages/Untitled_design_-_2024-02-22T192625.488_1_Y9q2VPy.png";
import image20 from "../compoenetsecond/allimages/Untitled_design_10_GPSyhLK.png";
import image21 from "../compoenetsecond/allimages/Vishwakarma_Institute_of_Technology.png";
import image22 from "../compoenetsecond/allimages/292040941_2272492752913115_4637554168687325275_n.jpg";
import image23 from "../compoenetsecond/allimages/theem_logo.jpg";
import image24 from "../compoenetsecond/allimages/viva-institute-of-technology-vit-thane.jpg";

const sampleData = [
  { image: image1, caption: "Campus View 1" },
  { image: image2, caption: "Campus View 2" },
  { image: image3, caption: "Laboratory Facility" },
  { image: image4, caption: "Library Area" },
  { image: image5, caption: "Lecture Hall" },
  { image: image6, caption: "Sports Ground" },
  { image: image7, caption: "Hostel Facility" },
  { image: image8, caption: "Cafeteria" },
  { image: image9, caption: "Computer Lab" },
  { image: image10, caption: "Cultural Event" },
  { image: image11, caption: "Student Gathering" },
  { image: image12, caption: "Official Logo" },
  { image: image13, caption: "ICT Mumbai" },
  { image: image14, caption: "JEE Preparation Tips" },
  { image: image15, caption: "KCET Exam" },
  { image: image16, caption: "KCET Resources" },
  { image: image17, caption: "RIT Logo" },
  { image: image18, caption: "Seminar Hall" },
  { image: image19, caption: "Workshop Event" },
  { image: image20, caption: "Seminar Highlights" },
  { image: image21, caption: "Vishwakarma Institute" },
  { image: image22, caption: "Cultural Fest" },
  { image: image23, caption: "Theem Logo" },
  { image: image24, caption: "VIVA Institute" },
];

const Carousel = ({ title, items }) => (
  <div className="mb-8 px-4 sm:px-6 lg:px-8">
    <h2 className="text-lg font-semibold mb-4 text-center">{title}</h2>
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 }, // Tablets: 2 items
        1024: { slidesPerView: 3 }, // Desktops: 3 items
      }}
      className="rounded-lg"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="text-center">
          <img
            src={item.image}
            alt={item.caption}
            className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[250px] object-cover border border-gray-300 rounded mb-2"
          />
          <p className="text-sm">{item.caption}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const Nearbycol = () => (
  <div className="max-w-6xl mx-auto p-4 font-sans">
    <Carousel title="Explore Nearby Colleges" items={sampleData} />
    <Carousel title="Similar Colleges" items={sampleData} />
    <Carousel title="Fee Details of Popular Colleges" items={sampleData} />
  </div>
);

export default Nearbycol;
