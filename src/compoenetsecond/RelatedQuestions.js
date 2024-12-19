import React from 'react';
import { ChevronRight } from 'lucide-react';

const RelatedQuestions = () => {
  const questions = [
    {
      id: 1,
      author: {
        name: 'Sahil',
        initial: 'S',
      },
      title: "I'm 12th maharashtra board PCB student and i dropped maths. can i give NIOS for mathematics only and eligible for mht cet in PCM for btech.",
      answers: [
        {
          author: {
            name: 'Soham Mitra',
            initial: 'S',
          },
          text: 'No, you cannot opt for only Maths exams through NIOS and be eligible for MT CET PCM B.Tech.',
          timestamp: '2 months ago'
        }
      ],
      answerCount: 1
    },
    {
      id: 2,
      author: {
        name: 'Akash Korde',
        initial: 'A',
      },
      title: 'Dsy cap 2 help needed for good clg',
      answers: [
        {
          author: {
            name: 'Soham Mitra',
            initial: 'S',
          },
          text: 'You can check out the CAP round 2 cutoff for the different colleges and see which colleges you will be eligible for admission as per the cutoff data.',
          timestamp: '2 months ago'
        }
      ],
      answerCount: 1
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-6">Related Questions</h2>
      
      <div className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="border rounded-lg p-4 space-y-4">
            {/* Question Header */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-gray-600">{question.author.initial}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{question.author.name}</h3>
                <p className="text-gray-800 mt-1">{question.title}</p>
              </div>
              <span className="text-sm text-gray-500">{question.answerCount} Answer</span>
            </div>

            {/* Answer Input */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type your answer here..."
                className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Post Answer
              </button>
            </div>

            {/* Answers */}
            {question.answers.map((answer, index) => (
              <div key={index} className="ml-11 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-gray-600">{answer.author.initial}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-900">{answer.author.name}</h4>
                      <span className="text-sm text-gray-500">{answer.timestamp}</span>
                    </div>
                    <p className="text-gray-700 mt-1">{answer.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* View All Questions Link */}
      <div className="mt-6">
        <a 
          href="#" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          View All Questions
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default RelatedQuestions;

