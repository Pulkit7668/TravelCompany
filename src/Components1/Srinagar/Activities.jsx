import React from "react";
import { FaCalendarAlt, FaClock, FaTicketAlt } from "react-icons/fa";

const activitiesData = [
  {
    location: "Gulmarg",
    title: "Gulmarg Gondola Ride",
    image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoiY3JtLzIwMjMtMDEtMTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=",
    date: "18th Sept 2023",
    duration: "1 Hour",
    tickets: "2 Tickets",
  },
];

const Activities = () => {
  return (
    <div className="p-6 ml-20">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-6">Activities</h1>

      {activitiesData.map((activity, index) => (
        <div key={index} className="mb-10">
          {/* Location Header */}
          <h2 className="text-black text-3xl font-bold mb-5">{activity.location}</h2>

          {/* Activity Card with updated styling */}
          <div className="w-[80%] flex flex-col md:flex-row items-start md:items-stretch mb-6 bg-white p-4 rounded-3xl border-2 border-gray-300 hover:shadow-lg hover:shadow-yellow-200 hover:border-yellow-300 transition-all duration-300">
            {/* Image Section */}
            <div className="w-full md:w-1/4 relative">
              <img
                src={activity.image}
                alt={activity.title}
                className="rounded-lg w-full h-[90%] object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="flex-1 ml-0 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-5">{activity.title}</h3>

                {/* Information */}
                <div className="mt-2">
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-gray-700 mr-2" />
                    <p className="text-gray-700">
                      <strong>{activity.date}</strong>
                    </p>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaClock className="text-gray-700 mr-2" />
                    <p className="text-gray-700">
                      <strong>{activity.duration}</strong>
                    </p>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaTicketAlt className="text-gray-700 mr-2" />
                    <p className="text-gray-700">
                      <strong>{activity.tickets}</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* View Detail Button */}
              <div className="flex items-end justify-end mt-4 md:mt-0">
                <button className="border border-black text-black text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 px-5 py-2 rounded-lg">
                  View Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;