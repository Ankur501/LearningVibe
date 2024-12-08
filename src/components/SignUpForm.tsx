import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SignUpFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'trial' | 'demo';
}

export function SignUpForm({ isOpen, onClose, type }: SignUpFormProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childGrade: '',
    subjects: [] as string[]
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative my-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {type === 'trial' ? 'Start Your Free Trial' : 'Schedule a Demo'}
        </h3>
        <p className="text-gray-600 mb-6">
          {type === 'trial' 
            ? 'Get 14 days of unlimited access to all features' 
            : 'See how LearningVibe can help your child excel'}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parent's Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              value={formData.parentName}
              onChange={(e) => setFormData({...formData, parentName: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Child's Grade
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              value={formData.childGrade}
              onChange={(e) => setFormData({...formData, childGrade: e.target.value})}
            >
              <option value="">Select Grade</option>
              {[6, 7, 8, 9, 10, 11, 12].map((grade) => (
                <option key={grade} value={grade}>Grade {grade}</option>
              ))}
            </select>
          </div>

  
          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            {type === 'trial' ? 'Start Free Trial' : 'Schedule Demo'}
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}