import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function GetStarted() {
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState(searchParams.get('plan') || 'basic');

  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan) {
      setSelectedPlan(plan);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Get Started with AI Solutions Hub</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">
          {selectedPlan === 'basic' && 'Basic RAG Chatbot'}
          {selectedPlan === 'advanced' && 'AI-Powered RAG'}
          {selectedPlan === 'enterprise' && 'Enterprise Solution'}
        </h2>

        <form action="https://formsubmit.co/mishalzubair23@gmail.com" method="POST" className="space-y-6">
          <input type="hidden" name="_subject" value={`New ${selectedPlan} Plan Request`} />
          <input type="hidden" name="_next" value={window.location.origin + '/get-started'} />
          <input type="hidden" name="plan" value={selectedPlan} />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Tell us about your needs..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}