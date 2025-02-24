import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If we're already on the home page, just scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">AI Solutions Hub</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-blue-600"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-blue-600"
              >
                Features
              </button>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">AI Solutions Hub</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400">Terms of Service</Link>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © {new Date().getFullYear()} AI Solutions Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}