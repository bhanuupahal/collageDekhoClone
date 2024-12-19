import React from 'react';

function Content() {
  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="relative h-12 w-12">
          <img
            src="/placeholder.svg"
            alt="Author avatar"
            className="rounded-full"
          />
          <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Written By</span>
            <span className="text-sm text-blue-600">Aditya - Content Writer</span>
          </div>
          <p className="text-sm text-gray-500">
            Updated on - Dec 06, 2024 11:23 AM IST
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        About Alamuri Ratnamala Institute of Engineering and Technology
      </h1>

      <div className="prose max-w-none">
        <p>
          Alamuri Ratnamala Institute of Engineering and Technology, also known as
          ARMIET, was established in 2008 as an engineering and management
          institute in Thane, Maharashtra. Today, the college is managed by the
          Koti Vidya Charitable Trust. It offers a number of UG, PG, and diploma
          programmes in engineering and management, including MMS, BE, ME, and
          diploma in engineering.
        </p>

        <p>
          All the ARMIET courses are affiliated with Mumbai University and approved
          by the All India Council for Technical Education (AICTE), the Maharashtra
          State Board of Technical Education (MSBTE), and the Directorate of
          Technical Education (DTE), Government of Maharashtra. The college is
          accredited by the National Assessment and Accreditation Council (NAAC)
          with a 'B+' grade. Moreover, the National Board of Accreditation (NBA)
          has accredited the Diploma Engineering in Civil Engineering programme at
          Alamuri Ratnamala Institute of Engineering and Technology.
        </p>

        <p className="text-gray-600">
          The ARMIET campus is located over 11 acres of land in Thane,
          Maharashtra. The campus offers various facilities to its students. The
          list of ARMIET facilities includes digital classrooms, spacious
          classrooms for...
        </p>
      </div>

      <button className="mt-4 text-blue-600 flex items-center space-x-1">
        <span>Read More</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </article>
  );
}

export default Content;