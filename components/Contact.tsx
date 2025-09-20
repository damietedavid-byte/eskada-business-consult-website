
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-eskada-gold font-semibold uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-eskada-blue mt-2">Start Your Business Journey Today</h2>
          <p className="mt-4 text-lg text-gray-600">
            Schedule a strategy call with our experts. Let's discuss how ESKADA can help you achieve your business goals in Nigeria.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-eskada-gold focus:border-transparent" />
              <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-eskada-gold focus:border-transparent" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-eskada-gold focus:border-transparent" />
            <textarea placeholder="Your Message" rows={5} className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-eskada-gold focus:border-transparent"></textarea>
            <button type="submit" className="w-full bg-eskada-blue text-white font-bold py-4 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300">
              Send Message
            </button>
          </form>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-eskada-gold text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg text-eskada-blue">Our Office</h3>
                <p className="text-gray-600">Plot 12 Miracle Estate Elelenwo Port Harcourt</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-eskada-gold text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg text-eskada-blue">Email Us</h3>
                <p className="text-gray-600">sukaribayoudeowei@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-eskada-gold text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg text-eskada-blue">Call Us</h3>
                <p className="text-gray-600">+234 803 310 7200</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaWhatsapp className="text-eskada-gold text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg text-eskada-blue">WhatsApp</h3>
                <p className="text-gray-600">Chat with us directly for quick inquiries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;