import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';

const NewsList = () => {
  const newsItems = [
    {
      id: 1,
      date: 'December 6, 2024',
      time: '9:51 AM',
      title: 'KLEEE 2025: Phase 1 Exam (Ongoing), Admit Card, Registration, Eligibility, Pattern, Syllabus'
    },
    {
      id: 2,
      date: 'December 5, 2024',
      time: '5:58 PM',
      title: 'Top Engineering Entrance Exams 2025 - Exam Dates, Registration, Admit Card and Results'
    },
    {
      id: 3,
      date: 'December 5, 2024',
      time: '5:00 PM',
      title: 'MHT CET Chemistry Weightage 2025: Expected chapter-wise marks distribution'
    },
    {
      id: 4,
      date: 'December 5, 2024',
      time: '5:00 PM',
      title: 'MHT CET Physics Weightage 2025: Expected chapter-wise marks distribution'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-[#0a0a2e] text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-medium">
          Alamuri Ratnamala Institute of Engineering and Technology Related News
        </h2>
      </div>

      {/* News List */}
      <div className="border border-t-0 rounded-b-lg">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors border-b last:border-b-0"
          >
            <div className="flex-shrink-0 mt-1">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-gray-500 mb-1">
                {item.date} {item.time}
              </div>
              <h3 className="text-base text-gray-900 font-medium">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-4 flex justify-end">
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View All News
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default NewsList;

