import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          
          <form action="https://formsubmit.co/mishalzubair23@gmail.com" method="POST" className="space-y-6">
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_next" value={window.location.origin + '/contact'} />
            
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
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">aisolutionbymz@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">0334 3812693</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">
                  Karachi, Pakistan                
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium mb-4">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
