import React, { useState } from "react";

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival in Srinagar",
    year: "2022",
    activities: [
      "Visit the Shankaracharya Hill and Temple",
      "Walk around Chashme Shahi Gardens",
      "Indira Gandhi Tulip Garden",
    ],
  },
  {
    day: "Day 2",
    title: "Arrival in Pahalgam",
    year: "2022",
    activities: [
      "Saffron Fields along the route",
      "Explore the lost temple, Awantishwari enroute",
      "Enroute - Martand Sun Temple",
    ],
  },
  {
    day: "Day 3",
    title: "Arrival in Gulmarg",
    year: "2022",
    activities: [
      "Arrival at Gulmarg",
      "Enjoy the Gulmarg Gondola ride",
      "Reach the magnificent Apharwat Peak",
    ],
  },
  {
    day: "Day 4",
    title: "Arrival in Srinagar",
    year: "2022",
    activities: [
      "Visit the tiny hamlet, Tangmarg",
      "Shop till you drop at the markets in Srinagar",
    ],
  },
  {
    day: "Day 5",
    title: "Arrival in New Delhi",
    year: "2022",
    activities: [],
  },
];

function Itinerary() {
  const [activeDay, setActiveDay] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
    <h1 className="text-3xl font-bold ml-16 xs:text-center xs:ml-0 xs:mb-8 mt-10 mb-5">Day By Day Itinerary</h1>
    <div className="flex flex-col md:flex-row gap-5 h-[46vh] xs:h-[55vh]">
      {/* Left Sidebar */}
      <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-4 md:mb-0">
        {itinerary.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`px-4 py-2 text-left rounded-lg border-2 hover:bg-[#565656] transition-all duration-300 ease-in-out ${
              activeDay === index
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {item.day}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div className="flex-1 bg-white p-6 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold mb-5">{itinerary[activeDay].year}</h2>
        <h1 className="text-3xl font-bold mb-5">
          {itinerary[activeDay].day} - {itinerary[activeDay].title}
        </h1>
        <div className="mb-4">
          
          <div className="flex flex-wrap gap-2 mt-2">
            <strong>Explore:</strong>
            {itinerary[activeDay].activities.slice(0, expanded ? undefined : 2).map((activity, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-gray-600 text-gray-600 text-sm font-medium rounded-full"
              >
                {activity}
              </span>
            ))}
          </div>
          {itinerary[activeDay].activities.length > 2 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 font-semibold text-sm mt-2"
            >
              {expanded ? "View less" : `1+ more`}
            </button>
          )}
        </div>
        <button className="text-blue-600 font-semibold">
          +Add Activity on {itinerary[activeDay].day}
        </button>
      </div>
    </div>
    </>
  );
}

export default Itinerary;

