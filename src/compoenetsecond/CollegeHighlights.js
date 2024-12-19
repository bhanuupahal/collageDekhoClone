import React, { useState } from 'react';

function CollegeHighlights() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    { icon: '₹', title: 'Avg Fee', value: '80 K Yearly' },
    { icon: '👥', title: 'Gender Accepted', value: 'Coed' },
    { icon: '🏛', title: 'Institute Type', value: 'Private' },
    { icon: '📚', title: 'Study Mode', value: 'Regular' },
    { icon: '🏠', title: 'Hostel Availability', value: 'Yes' },
  ];

  const placementData = [
    { department: 'Computer', studentsPlaced: 13, minPackage: 'Rs 2.4 LPA', avgPackage: 'Rs 3.4 LPA', maxPackage: 'Rs 4.5 LPA' },
    { department: 'IT', studentsPlaced: 12, minPackage: 'Rs 2.4 LPA', avgPackage: 'Rs 3.4 LPA', maxPackage: 'Rs 4.5 LPA' },
    { department: 'EXTC', studentsPlaced: 8, minPackage: 'Rs 2.4 LPA', avgPackage: 'Rs 3.2 LPA', maxPackage: 'Rs 4 LPA' },
    { department: 'Electrical', studentsPlaced: 25, minPackage: 'Rs 1.8 LPA', avgPackage: 'Rs 2.9 LPA', maxPackage: 'Rs 4 LPA' },
    { department: 'Mechanical', studentsPlaced: 49, minPackage: 'Rs 1.8 LPA', avgPackage: 'Rs 2.9 LPA', maxPackage: 'Rs 4 LPA' },
    { department: 'Civil', studentsPlaced: 37, minPackage: 'Rs 1.8 LPA', avgPackage: 'Rs 2.4 LPA', maxPackage: 'Rs 3 LPA' },
    { department: 'MMS', studentsPlaced: 22, minPackage: 'Rs 3 LPA', avgPackage: 'Rs 3.7 LPA', maxPackage: 'Rs 4.5 LPA' },
  ];

  const topRecruiters = [
    ['Infosys', 'Wipro', 'Accenture', 'Oracle'],
    ['Capgemini', 'JustDial', 'TCS', 'Jio'],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* Highlights Section */}
      <section>
        <h2 className="text-2xl font-bold text-[#0a0627] mb-6">
          Alamuri Ratnamala Institute of Engineering and Technology Highlights
        </h2>
        
        <div className="relative">
          <div className="flex items-center justify-center bg-gray-50 p-6 rounded-lg">
            <button
              onClick={prevSlide}
              className="absolute left-2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-4 space-y-2 transition-opacity duration-300 ${
                    index === currentSlide || window.innerWidth >= 768 ? 'opacity-100' : 'opacity-0 hidden md:block'
                  }`}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-sm text-gray-600">{item.title}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section>
        <h2 className="text-2xl font-bold text-[#0a0627] mb-4">
          Alamuri Ratnamala Institute of Engineering and Technology Placements
        </h2>
        
        <p className="text-gray-700 mb-6">
          The institute has a dedicated Training and Placement Department that allows students to get promising job opportunities after finishing their courses. Every year, the department invites various companies to ARMIET placements to conduct campus recruitment drives. It also provides various life skills certification programmes and organises various industrial visits to prepare its students for the ARMIET placement process.
        </p>
        
        <p className="mb-6">
          Find out more about{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Alamuri Ratnamala Institute of Engineering and Technology placements
          </a>{' '}
          below.
        </p>

        <h3 className="text-xl font-bold text-[#0a0627] mb-4">
          ARMIET Placement Highlights 2021
        </h3>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Number of Students Placed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Minimum Package
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average Package
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Maximum Package
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {placementData.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.studentsPlaced}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.minPackage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.avgPackage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.maxPackage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-[#0a0627] mb-4">
          Alamuri Ratnamala Institute of Engineering and Technology Top Recruiters
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border">
            <tbody>
              {topRecruiters.map((row, index) => (
                <tr key={index}>
                  {row.map((company, companyIndex) => (
                    <td key={companyIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                      {company}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center text-sm">
          <button className="text-blue-600 hover:underline">Read Less</button>
          <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
            View All Placement Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default CollegeHighlights;