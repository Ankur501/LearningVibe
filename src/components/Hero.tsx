import React, { useState } from 'react';
import { Sparkles, Brain, BookOpen } from 'lucide-react';
import { SignUpForm } from './SignUpForm';

export function Hero() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [formType, setFormType] = useState<'trial' | 'demo'>('trial');

  const openSignUp = (type: 'trial' | 'demo') => {
    setFormType(type);
    setShowSignUp(true);
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm text-purple-800">Now Live: HistoryVibe</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Make Learning 
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Fun & Easy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI-powered learning companion that transforms complex subjects into engaging, easy-to-understand lessons for grades 6-12.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => openSignUp('trial')}
                className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition text-lg"
              >
                Start Learning Now
              </button>
              <button 
                onClick={() => openSignUp('demo')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition text-lg"
              >
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
              alt="Students learning"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      <SignUpForm 
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        type={formType}
      />
    </div>
  );
}