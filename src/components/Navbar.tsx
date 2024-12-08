import React, { useState } from 'react';
import { BookOpen, ChevronDown, Menu, X } from 'lucide-react';
import { SignUpForm } from './SignUpForm';

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSubjects, setShowSubjects] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const subjects = [
    { name: 'HistoryVibe', available: true },
    { name: 'MathVibe', available: false },
    { name: 'ScienceVibe', available: false },
    { name: 'LitVibe', available: false }
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              LearningVibe
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-600 hover:text-purple-600"
                onClick={() => setShowSubjects(!showSubjects)}
              >
                <span>Subjects</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showSubjects && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-2 mt-1">
                  {subjects.map((subject, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        subject.available 
                          ? 'text-gray-700 hover:bg-purple-50' 
                          : 'text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {subject.name}
                      {!subject.available && ' (Coming Soon)'}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600">How it Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-purple-600">FAQ</a>
            <button 
              onClick={() => setShowSignUp(true)}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden py-4">
            <div className="space-y-2">
              <button 
                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-purple-50"
                onClick={() => setShowSubjects(!showSubjects)}
              >
                Subjects
              </button>
              {showSubjects && (
                <div className="pl-8 space-y-2">
                  {subjects.map((subject, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`block py-2 ${
                        subject.available 
                          ? 'text-gray-700' 
                          : 'text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {subject.name}
                      {!subject.available && ' (Coming Soon)'}
                    </a>
                  ))}
                </div>
              )}
              <a href="#features" className="block px-4 py-2 text-gray-600 hover:bg-purple-50">
                Features
              </a>
              <a href="#how-it-works" className="block px-4 py-2 text-gray-600 hover:bg-purple-50">
                How it Works
              </a>
              <a href="#testimonials" className="block px-4 py-2 text-gray-600 hover:bg-purple-50">
                Testimonials
              </a>
              <a href="#faq" className="block px-4 py-2 text-gray-600 hover:bg-purple-50">
                FAQ
              </a>
              <div className="px-4 pt-2">
                <button 
                  onClick={() => {
                    setShowSignUp(true);
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <SignUpForm 
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        type="trial"
      />
    </nav>
  );
}