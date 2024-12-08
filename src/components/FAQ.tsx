import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What age group is LearningVibe suitable for?",
    answer: "LearningVibe is designed for students from grades 6 to 12, with content specifically tailored to each grade level's curriculum requirements."
  },
  {
    question: "Which subjects are currently available?",
    answer: "We're starting with HistoryVibe, our comprehensive history learning module. More subjects will be added soon, including Math, Science, and Literature."
  },
  {
    question: "How does the AI-powered learning work?",
    answer: "Our AI technology analyzes your child's learning patterns, adapts to their pace, and provides personalized explanations and practice materials."
  },
  {
    question: "Can I track my child's progress?",
    answer: "Yes! Parents receive detailed progress reports and can monitor their child's learning journey through our intuitive dashboard."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial so you can experience how LearningVibe can benefit your child's education."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-purple-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about LearningVibe
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}