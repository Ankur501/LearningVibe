import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of 9th Grader",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    content: "LearningVibe has transformed my daughter's approach to history. The AI explanations break down complex topics in a way she easily understands. Her grades have improved significantly!"
  },
  {
    name: "Rajesh Patel",
    role: "Parent of 7th Grader",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    content: "The interactive timelines and storytelling approach make history fascinating for my son. He's actually excited about learning now!"
  },
  {
    name: "Anita Desai",
    role: "Parent of 11th Grader",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    content: "The personalized learning path has helped my daughter excel in her board exam preparation. The practice questions are particularly helpful."
  },
  {
    name: "Vikram Mehta",
    role: "Parent of 8th Grader",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80",
    content: "My son's understanding of historical events has improved dramatically. The visual learning approach really works for him."
  },
  {
    name: "Meera Reddy",
    role: "Parent of 10th Grader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "The progress tracking feature helps us understand exactly where my daughter needs more support. It's like having a personal tutor!"
  },
  {
    name: "Arjun Malhotra",
    role: "Parent of 6th Grader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    content: "The gamification elements make learning fun. My son loves earning badges and competing with himself to improve."
  }
];

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Parents Love LearningVibe
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied parents who've seen real results
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-purple-50 rounded-xl p-6 relative transform transition hover:scale-105">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
                <div className="absolute -top-2 -right-2 text-purple-200 text-6xl font-serif">"</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === currentPage ? 'bg-purple-600' : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}