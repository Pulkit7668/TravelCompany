import React, { useState } from "react";
import { FaSun } from "react-icons/fa";

const AboutSrinagar = () => {
  // State to manage whether the full text is visible
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to show/hide additional text
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-6 md:p-10 rounded-lg">
      {/* Left Section: Description */}
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 ml-20">
          A little about Srinagar
        </h1>
        <p className="text-gray-700 text-sm md:text-base ml-20">
          Srinagar is the largest city and the summer capital of Jammu and Kashmir, India. It
          lies in the Kashmir Valley on the banks of the Jhelum River, surrounded by the
          stunning Himalayan mountains. Srinagar is known as the “Heaven on Earth” due to
          its natural beauty and breathtaking scenery. The city is renowned for its Mughal
          gardens, the majestic Dal Lake, and beautiful houseboats. There are numerous
          attractions to explore in and around Srinagar such as Shankaracharya Mandir,
          Chasma Shashi, Nishat Bagh, Shalimar Bagh, and Gulmarg. The city is also home to
          a range of unique Kashmiri handicrafts such as pashmina shawls, colourful prints,
          and paintings. The friendly locals and pleasant atmosphere make Srinagar a great
          place to visit for family holidays and honeymoons.
          {isExpanded && (
            <span>
              {" "}
              Its delicious traditional cuisines, such as Seekh Kababs, Tabak Maz, Gushtaba,
              Hakh, Kashmiri Macchi, and Dum-Aloo. Srinagar is an ideal destination for those
              looking for a peaceful and mesmerizing break away from the hustle and bustle of
              city life.
            </span>
          )}
          <span
            className="text-blue-600 cursor-pointer font-semibold"
            onClick={toggleText}
          >
            {isExpanded ? " less" : " ...more"}
          </span>
        </p>
      </div>

      {/* Right Section: Weather and Altitude */}
      <div className="w-full md:w-[25%] mt-6 md:mt-10 bg-gray-50 p-4 rounded-lg border border-gray-200 mr-20">
        <h2 className="text-gray-800 font-semibold text-base mb-2">
          Weather (20 Nov - 27 Nov 2024)
        </h2>
        <div className="flex items-center mb-4">
          <FaSun className="text-yellow-400 text-2xl mr-2" />
          <div>
            <p className="text-lg font-bold">3°C - 13°C</p>
            <p className="text-gray-600 text-sm">clear sky</p>
          </div>
        </div>
        <div>
          <h3 className="text-gray-800 font-semibold text-base">Altitude</h3>
          <p className="text-gray-600 text-sm">
            1587 metres (5207 feet) above sea level
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSrinagar;
