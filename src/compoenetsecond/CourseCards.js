import React from 'react';

function CourseCards() {
  const courses = [
    {
      title: 'B.Tech',
      duration: '4 Years',
      studyMode: 'Regular',
      examsAccepted: 'MHT-CET',
      coursesOffered: 'B.E in Mechanical Engeenering, B.E in Civil Engineering',
      eligibility: 'ensure that students have the necessary academic background and skills to succeed in the rigorous B.Tech program offered at the institute.',
    },
    {
      title: 'Diploma',
      duration: '3 Years',
      studyMode: 'Regular',
      coursesOffered: 'Diploma (Mechanical Engineering), Diploma (Civil...',
      eligibility: 'To be eligible for a Diploma degree at Alamuri Ratnamala Institute of Engineering and Technology in Thane, candidates must have completed their 10th standard or equivalent examination from a',
    },
    {
      title: 'M.Tech',
      duration: '2 Years',
      studyMode: 'Regular',
      coursesOffered: 'M.E in Computer Science, M.E in Electronics & telecom',
      eligibility: "To be eligible for the M.Tech program at Alamuri Ratnamala Institute of Engineering and Technology, Thane, candidates must have a Bachelor's degree in Engineering or Technology from a recognized",
    },
    {
      title: 'MMS',
      duration: '2 Years',
      studyMode: 'Regular',
      fees: '₹80,000',
      coursesOffered: 'MMS in Finance, MMS in Marketing, MMS in Informatio...',
      eligibility: "To be eligible for the MMS degree program at Alamuri Ratnamala Institute of Engineering and Technology in Thane, candidates must have a Bachelor's degree in any discipline from a recognized university",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg border p-6 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <a href="#" className="text-blue-600 text-xl font-medium hover:underline">
                {course.title}
              </a>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Course Info */}
            <div className="space-y-4 flex-grow">
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-600">Duration</p>
                  <p>{course.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Study Mode</p>
                  <p>{course.studyMode}</p>
                </div>
              </div>

              {course.fees && (
                <div>
                  <p className="text-gray-600 text-sm">Fees</p>
                  <p>{course.fees}</p>
                </div>
              )}

              {course.examsAccepted && (
                <div>
                  <p className="text-gray-600 text-sm">Exams Accepted</p>
                  <p>{course.examsAccepted}</p>
                </div>
              )}

              <div>
                <div className="flex justify-between">
                  <p className="text-gray-600 text-sm">Courses Offered</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View All</a>
                </div>
                <p className="text-sm mt-1">{course.coursesOffered}</p>
              </div>

              <div>
                <p className="text-gray-600 text-sm">Eligibility</p>
                <p className="text-sm mt-1">{course.eligibility}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">
                Apply Now
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6 text-sm">
        <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Admission Details
        </a>
        <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
          Courses Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default CourseCards;