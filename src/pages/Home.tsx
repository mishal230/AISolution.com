import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Rocket, MessageSquare, Facebook, GitBranch as BrandTelegram, Globe2, ArrowRight, Check } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
            Next-Gen Chatbot Solutions for Your Business
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your customer engagement with our intelligent chatbot solutions. From basic RAG to advanced AI-powered multi-channel integration.
          </p>
{/*           <Link to="/services" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg">
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5" /> */}
           <a href="#services" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg">
           Explore Services
             <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Service Tiers</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:border-blue-500 transition-all">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic RAG Chatbot</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Document-based responses</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Knowledge base integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic query handling</span>
                </li>
              </ul>
              <Link to="/get-started?plan=basic" className="block w-full bg-blue-600 text-white text-center rounded-md py-2 hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Advanced Tier */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:border-blue-500 transition-all transform scale-105">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered RAG</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Advanced AI processing</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Natural language understanding</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Contextual responses</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Custom training</span>
                </li>
              </ul>
              <Link to="/get-started?plan=advanced" className="block w-full bg-blue-600 text-white text-center rounded-md py-2 hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:border-blue-500 transition-all">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solution</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Lead generation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Multi-channel integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>24/7 support</span>
                </li>
              </ul>
              <Link to="/get-started?plan=enterprise" className="block w-full bg-blue-600 text-white text-center rounded-md py-2 hover:bg-blue-700 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Multi-Channel Integration</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Globe2 className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Website Integration</h3>
              <p className="text-gray-600">Seamlessly embed our chatbot into your website</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Facebook className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Facebook Messenger</h3>
              <p className="text-gray-600">Connect with customers on Facebook</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <BrandTelegram className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telegram Integration</h3>
              <p className="text-gray-600">Extend your reach through Telegram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn how our chatbot solutions can transform your business.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
