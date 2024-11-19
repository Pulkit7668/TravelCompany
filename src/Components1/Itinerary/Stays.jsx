import React from "react";
import { FaStar, FaRegStar, FaCalendarAlt, FaUser, FaBed, FaUtensils } from "react-icons/fa";

const staysData = [
  {
    header: "Srinagar (2N)",
    location: "Srinagar",
    name: "Jamal Resorts",
    type: "3 star hotel",
    image: "https://us.dotwconnect.com/poze_hotel/11/1166858/2mp5Wg1X_84fc41fd1f459cfcd9e4249810a5aca2.jpg",
    reviews: {
      rating: 3.5,
      count: 637,
    },
    dates: "14th Sept 2023 - 16th Sept 2023",
    guests: "2 Adults",
    roomType: "Deluxe room (1 Room)",
    meals: "No Meals Included",
  },
  {
    header: "Sonamarg (2N)",
    location: "Sonamarg",
    name: "Hotel Barzman",
    type: "3 star hotel",
    image: "https://q-xx.bstatic.com/xdata/images/hotel/max2000/62201642.jpg?k=896ce91f6be319ae15086f4b30e82a772491bd826a6306604b9a606381e082f0&o=",
    reviews: {
      rating: 3.5,
      count: 383,
    },
    dates: "16th Sept 2023 - 18th Sept 2023",
    guests: "2 Adults",
    roomType: "Standard Room (1 Room)",
    meals: "No Meals Included",
  },
  {
    header: "Gulmarg (2N)",
    location: "Gulmarg",
    name: "Gulmarg Ski Hill Resort",
    type: "3 star hotel",
    image: "http://pix2.agoda.net/hotelimages/29338402/-1/9df81b4dc87cf71eaa53aef147eaba78.png",
    reviews: {
      rating: 3.1,
      count: 6,
    },
    dates: "18th Sept 2023-20th Sept 2023",
    guests: "2 Adults",
    roomType: "Deluxe Room (1 Room)",
    meals: "Complementary Breakfast Included",
  },
];

const Stays = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {/* Full Stars */}
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {/* Half Star */}
        {halfStar && <FaStar className="text-yellow-500" />}
        {/* Empty Stars */}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  return (
    <>
      <h1 className="text-4xl font-bold ml-24 mt-10 mb-5">Stays</h1>
      <div className="p-6 ml-16">
        {staysData.map((stay, index) => (
          <div key={index} className="mb-10">
            <h1 className="text-black text-3xl font-bold mb-5">{stay.header}</h1>
            <div
              className="w-[80%] flex flex-col md:flex-row items-start md:items-stretch mb-6 bg-white p-4 rounded-3xl border-2 border-gray-300 hover:shadow-lg hover:shadow-yellow-200 hover:border-yellow-300 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/4 relative">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="rounded-lg w-full h-[90%] object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#01202B] text-white text-sm font-semibold font-serif px-2 py-1 rounded-full">
                  {stay.type}
                </span>
              </div>

              {/* Details Section */}
              <div className="flex-1 ml-0 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold">{stay.name}</h2>
                  <p className="text-gray-500">{stay.location}</p>

                  {/* Rating and Reviews */}
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">{renderStars(stay.reviews.rating)}</div>
                    <span className="text-gray-500 ml-2">
                      • {stay.reviews.count} user reviews
                    </span>
                  </div>

                  {/* Stay Details with Icons */}
                  <div className="mt-2">
                    <div className="flex items-center mb-2">
                      <FaCalendarAlt className="text-gray-700 mr-2" />
                      <p className="text-gray-700">
                        <strong>{stay.dates}</strong>
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaUser className="text-gray-700 mr-2" />
                      <p className="text-gray-700">
                        <strong>{stay.guests}</strong>
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaBed className="text-gray-700 mr-2" />
                      <p className="text-gray-700">
                        <strong>{stay.roomType}</strong>
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaUtensils className="text-gray-700 mr-2" />
                      <p className="text-gray-700">
                        <strong>{stay.meals}</strong>
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
    </>
  );
};

export default Stays;
