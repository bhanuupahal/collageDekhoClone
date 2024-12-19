import React from 'react';

function CoursesInfo() {
  const courseData = [
    {
      programme: 'MMS',
      fees: 'Rs 80,000',
      eligibility: [
        'Graduation : 50%',
        'Exam : MAH MBA CET, CAT, ATMA'
      ]
    },
    {
      programme: 'BE',
      fees: 'Rs 91,709',
      eligibility: [
        'Class 12 : 45%',
        'Exam : JEE Main, MHT CET'
      ]
    },
    {
      programme: 'Diploma Engineering',
      fees: 'Rs 53,200',
      eligibility: [
        'Class 10 : 35%'
      ]
    },
    {
      programme: 'ME',
      fees: '-',
      eligibility: [
        'Graduation : 50%',
        'Exam : GATE'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-[#0a0627] mb-6">
        Alamuri Ratnamala Institute of Engineering and Technology Courses and Admission 2025
      </h1>

      <div className="space-y-4">
        <p className="text-gray-800 leading-relaxed">
          ARMIET courses include MMS in five specialisations, BE in seven specialisations, ME in three specialisations, and diploma engineering in five specialisations. The MMS specialisations available at Alamuri Ratnamala Institute of Engineering and Technology are finance, marketing, human resources, operations, and information technology. The ARMIET fees structure is designed keeping in mind affordability. There are also ARMIRT scholarships available for deserving and needy students.
        </p>

        <p className="text-gray-800">
          Learn more about the{' '}
          <a href="#" className="text-blue-600 hover:underline">ARMIET courses</a>
          {' '}and fees in the section below.
        </p>
      </div>

      <h2 className="text-xl font-bold text-[#0a0627] mt-8 mb-4">
        Alamuri Ratnamala Institute of Engineering and Technology Courses and Eligibility 2024
      </h2>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Programmes</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Annual Fees</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Eligibility Criteria</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courseData.map((course, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {course.programme}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {course.fees}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {course.eligibility.map((item, idx) => (
                    <div key={idx}>{item}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 mt-6">
        <p className="text-gray-800 leading-relaxed">
          The ARMIET admission process for its various UG and PG courses is based on a student's performance in the prescribed entrance exams. The institute accepts JEE Main and MHT CET for BE admissions, MAH MBA CET, CAT and ATMA for MMS admissions, and GATE for ME admissions. However, diploma engineering candidates can get admission to the institute based on their merit in the last qualifying exam.
        </p>

        <p className="text-gray-800">
          Find out all about the{' '}
          <a href="#" className="text-blue-600 hover:underline">ARMIET admission</a>
          {' '}dates in the tables below.
        </p>
      </div>
    </div>
  );
}

export default CoursesInfo;