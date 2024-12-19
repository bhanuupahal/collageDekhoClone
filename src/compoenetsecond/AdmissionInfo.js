import React, { useState } from 'react';

function AdmissionInfo() {
  const [selectedExam, setSelectedExam] = useState('MHT-CET');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [rank, setRank] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Expert Connect Banner */}
      <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-xl font-bold text-[#0a0627]">
              Are you Confused? Talk to an Alamuri Ratnamala Institute of Engineering and Technology Expert
            </h2>
            <p className="text-gray-600">
              Who offers personalized guidance, mentorship, and invaluable insights tailored to your academic and career aspirations.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Connect Now
            </button>
          </div>
          <div className="w-64 h-48 relative">
            <img
              src="/placeholder.svg"
              alt="Expert guidance illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Predict Chances Section */}
      <div className="bg-[#0a0627] text-white p-6 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full space-y-4">
            <h2 className="text-xl font-bold mb-4">
              Predict your chances for admission in Alamuri Ratnamala Institute of Engineering and Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <select 
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="bg-white text-gray-900 rounded px-3 py-2"
              >
                <option value="MHT-CET">MHT-CET</option>
              </select>
              
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="bg-white text-gray-900 rounded px-3 py-2"
              >
                <option value="">Select Course</option>
                <option value="btech">B.Tech</option>
                <option value="mtech">M.Tech</option>
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white text-gray-900 rounded px-3 py-2"
              >
                <option value="">Select Category</option>
                <option value="general">General</option>
                <option value="obc">OBC</option>
              </select>

              <input
                type="text"
                placeholder="Enter Your Rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className="bg-white text-gray-900 rounded px-3 py-2"
              />

              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
                Predict My Chances
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-64 h-48 relative">
            <img
              src="/placeholder.svg"
              alt="Prediction illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Cut Off Section */}
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-xl font-bold text-[#0a0627] mb-4">
          Alamuri Ratnamala Institute of Engineering and Technology Cut Off
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            The Maharashtra State CET Cell conducts the centralised ARMIET counselling processfor BE, ME and MMS based on JEE Main/ MHT CET, GATE, and MAH MBA CET/ CAT/ ATMA, respectively. It is a round-wise counselling process wherein applicants must go through the steps such as registration, document uploading, choice-filling, seat allotment, reporting, and document verification. At the end of each round, the cell releases the course-specific{' '}
            <a href="#" className="text-blue-600 hover:underline">
              ARMIET cut off
            </a>
            {' '}lists. Students who meet the cutoff requirements of its courses are offered final admission to the institute.
          </p>

          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#0a0627]">B.Tech</h3>
            <p className="text-gray-600">B.Tech in Mechanical Engineering (Engineering)</p>
            
            <div className="space-y-2">
              <h4 className="font-medium">MHT-CET</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">
                    Home University Seats Allotted to Home University Candidates - GOPENS
                  </p>
                </div>
                <div>
                  <p className="text-sm">1.9991599</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              Read Less
              <svg
                className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
              Detail CutOff
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

export default AdmissionInfo;