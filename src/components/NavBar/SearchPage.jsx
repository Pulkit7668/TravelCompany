import React from 'react';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const navigate = useNavigate();
  
  const destinations = [
    { name: 'Jammu & Kashmir', region: 'India' },
    { name: 'Sikkim', region: 'India' },
    { name: 'Switzerland', region: 'Europe' },
    { name: 'Andaman & Nicobar', region: 'India' },
    { name: 'Vietnam', region: 'Asia' }
  ];

  return (
    <div className="p-4">
      {/* Close Icon */}
      <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Search Input */}
      <div className="my-4">
        <input
          type="text"
          placeholder="Search Locations"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Popular Destinations */}
      <h2 className="font-semibold text-gray-600 mb-3">POPULAR DESTINATIONS</h2>
      <ul className="space-y-3">
        {destinations.map((destination, index) => (
          <li key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
            {/* Location Icon */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 4.25 4.5 9.19 6.3 11.24a1 1 0 001.4 0C14.5 18.19 19 13.25 19 9c0-3.87-3.13-7-7-7zm0 9a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </div>
            {/* Destination Name and Region */}
            <div>
              <p className="text-black font-medium">{destination.name}</p>
              <p className="text-gray-500 text-sm">{destination.region}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
