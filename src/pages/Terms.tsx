import React from 'react';

export function Terms() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using AI Solutions Hub's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p className="text-gray-600">
            AI Solutions Hub provides chatbot and AI-powered communication solutions. Our services include basic RAG chatbots, AI-powered RAG systems, and enterprise-level solutions with multi-channel integration capabilities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
          <p className="text-gray-600 mb-4">
            Users of our services agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of their account credentials</li>
            <li>Use the services in compliance with applicable laws</li>
            <li>Not engage in any unauthorized use of the services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-gray-600">
            All content, features, and functionality of our services are owned by AI Solutions Hub and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            AI Solutions Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services.
          </p>
        </section>
      </div>
    </div>
  );
}