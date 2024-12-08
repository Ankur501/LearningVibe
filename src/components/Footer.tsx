import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">LearningVibe</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making learning fun and easy for students through AI-powered education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-purple-400">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-purple-400">How it Works</a></li>
              <li><a href="#testimonials" className="hover:text-purple-400">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-purple-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">HistoryVibe</a></li>
              <li><span className="text-gray-600">MathVibe (Coming Soon)</span></li>
              <li><span className="text-gray-600">ScienceVibe (Coming Soon)</span></li>
              <li><span className="text-gray-600">LitVibe (Coming Soon)</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>support@learningvibe.com</li>
              <li>1-800-LEARNING</li>
              <li>Mon-Fri: 9AM - 6PM EST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LearningVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}