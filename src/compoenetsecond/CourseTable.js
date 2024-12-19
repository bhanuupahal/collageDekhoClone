import React, { useState } from 'react';

function CourseTable() {
  const [isExpanded, setIsExpanded] = useState(false);

  const courses = [
    {
      name: "B.Tech. (Bachelor of Technology)",
      eligibility: "10+2 examination with Physics, Chemistry, and Mathematics as compulsory subjects, minimum aggregate of 50% marks, valid score in entrance exams such as JEE Main or MHT CET",
      fees: "-",
      link: "B.Tech. (Bachelor of Technology)"
    },
    {
      name: "Diploma",
      eligibility: "10th standard or equivalent examination, minimum aggregate score of 45% in qualifying examination",
      fees: "-",
      link: "Diploma"
    },
    {
      name: "M.Tech. (Master of Technology)",
      eligibility: "Bachelor's degree in Engineering or Technology, Minimum aggregate of 50%, Valid GATE score, Qualified in the entrance exam conducted by the institute",
      fees: "-",
      link: "M.Tech. (Master of Technology)"
    },
    {
      name: "M.M.S. (Master of Management Studies)",
      eligibility: "Bachelor's degree in any discipline, minimum 50% aggregate marks, valid score in CAT, MAT, XAT, CMAT, or MAH-CET",
      fees: "₹80,000",
      link: "M.M.S. (Master of Management Studies)"
    }
  ];

  const tableOfContents = [
    "About Alamuri Ratnamala Institute of Engineering and Technology",
    "Alamuri Ratnamala Institute of Engineering and Technology Courses and Admission 2025",
    "Alamuri Ratnamala Institute of Engineering and Technology Placements",
    "Top Courses at Alamuri Ratnamala Institute of Engineering and Technology",
    "Alamuri Ratnamala Institute of Engineering and Technology Highlights",
    "Alamuri Ratnamala Institute of Engineering and Technology Cut Off"
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold text-[#0a0627] mb-6">
        Top Courses at Alamuri Ratnamala Institute of Engineering and Technology
      </h1>

      {/* Courses Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Course Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Short Eligibility</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Fees</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Apply Now</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <a href="#" className="text-blue-600 hover:underline">
                    {course.name}
                  </a>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {course.eligibility}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {course.fees}
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 border border-blue-600 rounded px-4 py-2 hover:bg-blue-50 transition-colors">
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#0a0627]">Table of Contents</h2>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className={`space-y-3 ${isExpanded ? 'block' : 'hidden'}`}>
          {tableOfContents.map((item, index) => (
            <div key={index}>
              <a href="#" className="text-blue-600 hover:underline block">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseTable;