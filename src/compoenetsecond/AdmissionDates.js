import React, { useState } from 'react';

function AdmissionDates() {
  const [isExpanded, setIsExpanded] = useState(false);

  const jeeMainDates = [
    {
      event: 'JEE Main 2024 Session 2 Exam Dates',
      date: 'April 1 to April 15, 2024'
    },
    {
      event: 'JEE Main 2024 Session 2 Result Date',
      date: 'April 24, 2024'
    }
  ];

  const mhtCetDates = [
    {
      event: 'MHT CET exam date 2024 (PCM Group)',
      date: 'May 2 to May 17, 2024'
    },
    {
      event: 'MHT CET exam date 2024 (PCB Group)',
      date: 'April 22 to April 30, 2024'
    },
    {
      event: 'MHT CET 2024 Result',
      date: 'May 2024'
    },
    {
      event: 'MHT CET 2024 Counselling',
      date: 'June 2024 to August 2024'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* JEE Main Section */}
      <section>
        <h2 className="text-xl font-bold text-[#0a0627] mb-4">
          ARMIET Admission Dates 2024: JEE Main 2024
        </h2>
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 text-left text-sm font-medium text-gray-900">
            JEE Main 2024 Session 2
          </div>
          <div className="divide-y divide-gray-200">
            {jeeMainDates.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 hover:bg-gray-50">
                <div className="px-6 py-4 text-sm text-gray-900">{item.event}</div>
                <div className="px-6 py-4 text-sm text-gray-900">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MHT CET Section */}
      <section>
        <h2 className="text-xl font-bold text-[#0a0627] mb-4">
          Alamuri Ratnamala Institute of Engineering and Technology Admission Dates 2024: MHT CET 2024
        </h2>
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50">
            <div className="px-6 py-3 text-left text-sm font-medium text-gray-900">Events</div>
            <div className="px-6 py-3 text-left text-sm font-medium text-gray-900">Dates</div>
          </div>
          <div className="divide-y divide-gray-200">
            {mhtCetDates.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 hover:bg-gray-50">
                <div className="px-6 py-4 text-sm text-gray-900">{item.event}</div>
                <div className="px-6 py-4 text-sm text-gray-900">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section>
        <h2 className="text-xl font-bold text-[#0a0627] mb-4">
          ARMIET Application Process 2024
        </h2>
        <div className="space-y-4">
          <p className="text-gray-800">
            ARMIET applications can be submitted online for the direct admission process. Students who are eligible for admission can fill out the ARMIET application form with all the required details to secure admission to the institute.
          </p>
          <p className="text-gray-800">
            Here is how to apply to Alamuri Ratnamala Institute of Engineering and Technology.
          </p>
          
          <div className={`space-y-4 ${isExpanded ? '' : 'max-h-[300px] overflow-hidden'}`}>
            <div className="space-y-3">
              <p className="font-bold">Step 1:</p>
              <p>Visit the institute's official website and click on the 'Admissions' tab.</p>
              
              <p className="font-bold">Step 2:</p>
              <p>Select the course of your choice and you will be redirected to the ARMIET application portal.</p>
              
              <p className="font-bold">Step 3:</p>
              <p>Register yourself on the portal using your valid mobile number and OTP.</p>
              
              <p className="font-bold">Step 4:</p>
              <p>Fill out the ARMIET application with all the required details and pay the application fee to complete the application process.</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 flex items-center space-x-1 hover:underline"
          >
            <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdmissionDates;