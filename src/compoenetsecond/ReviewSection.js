import React, { useState } from 'react';

function ReviewSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ratingDistribution = [
    { stars: 5, percentage: 33, label: '5 Star Rating' },
    { stars: 4, percentage: 33, label: '4 Star Rating' },
    { stars: 3, percentage: 0, label: '3 Star Rating' },
    { stars: 2, percentage: 17, label: '2 Star Rating' },
    { stars: 1, percentage: 17, label: '1 Star Rating' },
  ];

  const categoryRatings = [
    { name: 'Overall', rating: 3.5, reviews: 6 },
    { name: 'Infrastructure', rating: 3.7, reviews: 6 },
    { name: 'Faculty', rating: 4.8, reviews: 4 },
    { name: 'Placement', rating: 3.3, reviews: 4 },
  ];

  const StarRating = ({ rating, size = 'base' }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-${size} h-${size} ${
              star <= rating ? 'text-orange-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="bg-[#0a0627] text-white p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <p className="text-lg">
            Get details on all exams and their Cut off marks for session 2024!
          </p>
          <button className="bg-orange-400 text-black px-6 py-2 rounded hover:bg-orange-500 transition-colors">
            View Detailed Cut Off
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="p-6 space-y-8">
        <h2 className="text-2xl font-bold text-[#0a0627]">
          Alamuri Ratnamala Institute of Engineering and Technology Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rating Overview */}
          <div className="bg-white p-6 rounded-lg border">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-[#0a0627]">3.5</div>
              <StarRating rating={3.5} size="5" />
              <div className="text-sm text-gray-500">(6 Reviews)</div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <StarRating rating={item.stars} />
                  <div className="flex-grow">
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 bg-orange-400 rounded"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Ratings */}
          <div className="flex flex-col justify-center">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {categoryRatings.map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white p-4 rounded-lg border text-center min-w-[150px]"
                >
                  <div className="font-medium mb-2">{category.name}</div>
                  <div className="bg-orange-100 text-orange-600 rounded-full px-2 py-1 inline-block mb-1">
                    {category.rating} ★
                  </div>
                  <div className="text-sm text-blue-600">
                    ({category.reviews} Reviews)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Feedback */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#0a0627]">Students Feedback</h3>
          
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                K
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Kunal</h4>
                    <p className="text-sm text-gray-500">
                      B.E in Information technology | 2024 | Feb 21, 2024 17:50:16
                    </p>
                  </div>
                  <StarRating rating={5} />
                </div>
                <p className="mt-2 text-gray-600">
                  "ARMIET: Fostering IT excellence with Mumbai University's backing." ARMIET College offers a dynamic IT program under Mumbai University, fostering excellence in tech education.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button className="text-blue-600 hover:underline">Show More</button>
            <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
              View All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;