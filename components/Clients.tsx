
import React, { useState } from 'react';
import { CLIENTS } from '../constants';
import type { Client } from '../types';
import { FaTimes, FaQuoteLeft } from 'react-icons/fa';

const Clients: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleOpenModal = (client: Client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <>
      <div className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wider">
            Trusted by industry leaders for over two decades
          </h2>
          <div className="mt-10 flow-root">
            <div className="-my-4 divide-y divide-gray-200">
              <div className="py-4">
                <div className="flex items-center justify-center gap-8 sm:gap-10 lg:gap-16 flex-wrap">
                  {CLIENTS.map((client) => (
                    <div key={client.name} className="flex-shrink-0">
                      <button
                        onClick={() => handleOpenModal(client)}
                        className={`${client.className} transition-opacity duration-300 hover:opacity-75 focus:outline-none`}
                        aria-label={`Learn more about our work with ${client.name}`}
                      >
                        {client.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedClient && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white text-eskada-dark-gray rounded-lg shadow-2xl max-w-2xl w-full mx-auto animate-scale-in max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pt-6 pb-4 sm:px-8 sm:pt-8 flex-shrink-0 border-b border-gray-200">
              <div className="relative flex items-center justify-center">
                <h2 className={`${selectedClient.className} text-center`}>{selectedClient.name}</h2>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-1/2 -translate-y-1/2 right-0 text-gray-400 hover:text-eskada-blue transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 pt-6 overflow-y-auto">
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="font-bold text-eskada-blue uppercase text-sm tracking-wider mb-2">About the Company</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedClient.about}</p>
                </div>
                <div>
                  <h3 className="font-bold text-eskada-blue uppercase text-sm tracking-wider mb-2">Our Partnership</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedClient.partnership}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <FaQuoteLeft className="text-eskada-gold text-2xl mb-2" />
                  <p className="text-gray-800 italic font-medium">"{selectedClient.testimonial}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Clients;
