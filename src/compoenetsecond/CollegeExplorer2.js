import React, { useState } from 'react';

const CollegeExplorer2 = () => {
  const [activeTab, setActiveTab] = useState('state');
  
  const degreeLinks = [
    { title: 'B.Tech Colleges in Maharashtra' },
    { title: 'Diploma Colleges in Maharashtra' },
    { title: 'M.Tech Colleges in Maharashtra' },
    { title: 'B.Arch Colleges in Maharashtra' },
    { title: 'M.Arch Colleges in Maharashtra' },
  ];

  const specializationLinks = [
    { title: 'Mechanical Engineering Colleges in Maharashtra' },
    { title: 'Civil Engineering Colleges in Maharashtra' },
    { title: 'Electrical Engineering Colleges in Maharashtra' },
    { title: 'Computer Science Colleges in Maharashtra' },
    { title: 'Computer Engineering Colleges in Maharashtra' },
  ];

  const courseLinks = [
    { title: 'B.Tech Mechanical Engineering Colleges in Maharashtra' },
    { title: 'B.Tech Electrical Engineering Colleges in Maharashtra' },
    { title: 'B.Tech Telecommunication Colleges in Maharashtra' },
    { title: 'B.Tech Electronics Engineering Colleges in Maharashtra' },
    { title: 'B.Tech Chemical Engineering Colleges in Maharashtra' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F0F1FF]">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Explore More Engineering Colleges in Maharashtra</h2>
        <div className="flex gap-4 border-b">
          <button
            className={`pb-2 px-4 ${
              activeTab === 'state'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('state')}
          >
            By State
          </button>
          <button
            className={`pb-2 px-4 ${
              activeTab === 'city'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('city')}
          >
            By City
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* By Degree */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold mb-4">By Degree</h3>
          <ul className="space-y-3">
            {degreeLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* By Specialization */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold mb-4">By Specialization</h3>
          <ul className="space-y-3">
            {specializationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* By Course */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold mb-4">By Course</h3>
          <ul className="space-y-3">
            {courseLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <a href="#" className="hover:text-blue-600">Colleges in Thane</a>
        <span>›</span>
        <span>Alamuri Ratnamala Institute of Engineering and Technology</span>
      </div>

      {/* Registration Form */}
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-6">Register with us</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Stream</option>
              <option value="engineering">Engineering</option>
              <option value="medical">Medical</option>
              <option value="arts">Arts</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Details
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          By proceeding ahead you expressly agree to the CollegeDekho{' '}
          <a href="#" className="text-blue-600 hover:underline">
            terms of use
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:underline">
            privacy policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default CollegeExplorer2;

