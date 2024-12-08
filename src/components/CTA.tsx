import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SignUpForm } from './SignUpForm';

export function CTA() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [formType, setFormType] = useState<'trial' | 'demo'>('trial');

  const openSignUp = (type: 'trial' | 'demo') => {
    setFormType(type);
    setShowSignUp(true);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Child's Learning Experience?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join LearningVibe today and watch your child's confidence and understanding grow with our AI-powered learning platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => openSignUp('trial')}
            className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition text-lg inline-flex items-center"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={() => openSignUp('demo')}
            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition text-lg"
          >
            Schedule Demo
          </button>
        </div>
      </div>
      
      <SignUpForm 
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        type={formType}
      />
    </section>
  );
}