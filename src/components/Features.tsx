import React from 'react';
import { Brain, BookOpen, Lightbulb, Target, Clock, Shield, CheckCircle2, Zap } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose LearningVibe?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of parents who've transformed their child's learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 transform transition-all hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">AI-Powered Learning</h3>
            </div>
            <p className="text-gray-600 mb-6">Our advanced AI technology adapts to your child's learning style, providing personalized explanations and practice materials.</p>
            <ul className="space-y-3">
              {['Smart pace adaptation', 'Real-time feedback', 'Personalized learning path'].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 transform transition-all hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-600 p-3 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Engaging Content</h3>
            </div>
            <p className="text-gray-600 mb-6">Interactive lessons and gamified learning make education fun and memorable for your child.</p>
            <ul className="space-y-3">
              {['Interactive worksheets', 'Gamified exercises', 'Visual learning tools'].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "95% Success Rate",
              description: "Students show significant improvement within 3 months"
            },
            {
              icon: Clock,
              title: "2x Faster Learning",
              description: "Complex topics understood in half the usual time"
            },
            {
              icon: Shield,
              title: "100% Satisfaction",
              description: "30-day money-back guarantee if you're not satisfied"
            }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition">
              <div className="inline-block p-3 bg-purple-100 rounded-lg mb-4">
                <stat.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}