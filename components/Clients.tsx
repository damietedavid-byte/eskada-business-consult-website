
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wider">
          Trusted by industry leaders for over two decades
        </h2>
        <div className="mt-8 flow-root">
          <div className="-my-4 divide-y divide-gray-200">
            <div className="py-4">
              <div className="flex items-center justify-center gap-8 sm:gap-10 lg:gap-16 flex-wrap">
                {CLIENT_LOGOS.map((client) => (
                  <div key={client.name} className="flex-shrink-0">
                    {client.logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
