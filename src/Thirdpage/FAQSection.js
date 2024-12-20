import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const faqs = [
    {
      question: 'Which is the Top Mechanical B.Tech College in India ?',
      answer: 'IIT Bombay is the Top Mechanical B.Tech College in India.'
    },
    {
      question: 'Which is the Top Electronics and Communication Engineering College in India ?',
      answer: 'IIT Delhi is the top Electronics and Communication Engineering College in India.'
    },
    {
      question: 'Which is the Top Computer Science B.Tech College in India ?',
      answer: 'IIT Bombay and IIT Delhi are among the top Computer Science B.Tech Colleges in India.'
    },
    {
      question: 'Which is the top B.Tech College in India in terms of Outlook Ranking ?',
      answer: 'IIT Bombay ranks as the top B.Tech College in India according to Outlook Rankings.'
    },
    {
      question: 'Which is the top B.Tech College in India in terms of highest return on investment ?',
      answer: 'IIT Bombay offers one of the highest returns on investment among B.Tech colleges in India.'
    }
  ];

  const totalPages = 151;
  const displayPages = 3;

  const renderPaginationNumbers = () => {
    let pages = [];
    for (let i = 1; i <= displayPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-8 h-8 flex items-center justify-center rounded-md ${
            currentPage === i
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="w-8 h-8 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
          disabled={currentPage === 1}
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
        </button>
        
        {renderPaginationNumbers()}
        
        <span className="px-2">...</span>
        
        <button
          className="w-8 h-8 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
        >
          {totalPages}
        </button>
        
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className="w-8 h-8 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* FAQs Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <h2 className="text-xl font-bold p-6 border-b">FAQs</h2>
        
        <div className="divide-y">
          {faqs.map((faq, index) => (
            <div key={index} className="border-gray-400">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openQuestion === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 mt-1" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 mt-1" />
                )}
              </button>
              
              {openQuestion === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-6 border-t text-center">
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

