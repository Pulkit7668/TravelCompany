import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi';

const Form = ({ onClose }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [notSure, setNotSure] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full h-[80vh] relative">
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <FaTimes size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center">Get your free travel plan now</h2>
        
        {/* Departing From Field */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">What do you want to explore?</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Departing from"
              value="Delhi, IN"
              readOnly
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
            <HiOutlineLocationMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Destination Field */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destination"
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-500 focus:outline-none"
            />
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Date Picker Fields */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">When are you planning to travel?</label>
          <div className='text-md font-bold flex items-center justify-between mr-32 mb-1'>
            <p className='text-black'>Start Date</p>
            <p className='text-black'>End Date</p>
          </div>
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Start Date"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
              />
              <HiOutlineCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative flex-1">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="End Date"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
              />
              <HiOutlineCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="notSure"
            checked={notSure}
            onChange={() => setNotSure(!notSure)}
            className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
          />
          <label htmlFor="notSure" className="ml-2 text-gray-700 text-sm">
            Not sure? Let us decide the best time for your trip.
          </label>
        </div>

        {/* Continue Button */}
        <button className="w-full py-3 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-black hover:text-white focus:outline-none">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Form;
