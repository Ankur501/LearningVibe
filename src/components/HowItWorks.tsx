import React from 'react';
import { BookOpen, Brain, Rocket, Trophy } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: "Discover HistoryVibe",
    description: "Interactive history lessons with engaging storytelling",
    features: ["Rich multimedia", "Interactive timelines", "Historical stories"]
  },
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized learning paths with instant support",
    features: ["Smart adaptation", "Real-time help", "Practice questions"]
  },
  {
    icon: Rocket,
    title: "Practice & Excel",
    description: "Gamified exercises that make learning fun",
    features: ["Fun challenges", "Achievement badges", "Progress tracking"]
  },
  {
    icon: Trophy,
    title: "Track Success",
    description: "Detailed insights into learning progress",
    features: ["Visual analytics", "Performance reports", "Monthly updates"]
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Child's Learning Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a revolutionary learning journey that makes education fun and effective
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -top-4 -right-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>
              <div className="mb-4">
                <step.icon className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}