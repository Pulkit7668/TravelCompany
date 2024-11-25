import React from "react";

const PlacesToVisit = () => {
  const places = [
    {
      title: "Kashmir Government Arts Emporium",
      rating: "4.2",
      reviews: "85",
      image:
        "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcG9pcy8xNjc2MDYxMjcwMjQ5NzgxMTMxNzQ0Mzg0NzY1NjIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjI1MCwiZml0IjoiY292ZXIifX19",
    },
    {
      title: "Floating Post Office Dal Lake",
      rating: "4.5",
      reviews: "86",
      image:
        "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcG9pcy8xNjc2MDYxMjYyOTk2OTk4MzEwMDg5MTExMzI4MTIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjI1MCwiZml0IjoiY292ZXIifX19",
    },
    {
      title: "Kathi Darwaza",
      rating: "4.3",
      reviews: "73",
      image:
        "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcG9pcy8xNjc0MDU5MTczODMwODgxNTk1NjExNTcyMjY1NjIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6MjUwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      title: "Parihaspora",
      rating: "4.0",
      reviews: "65",
      image:
        "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcG9pcy8xNTkxNDQxMTc2MTU2MjA4OTkyMDA0Mzk0NTMxMjUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6MjUwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      title: "Dachigam National Park",
      rating: "4.4",
      reviews: "2275",
      image:
        "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcG9pcy8xNTk4MjcyOTczODkzMDUyNTc3OTcyNDEyMTA5MzguanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjI1MCwiZml0IjoiY292ZXIifX19",
    },
    {
      title: "Foreshore Road",
      rating: "4.3",
      reviews: "112",
      image:
        "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcG9pcy8xNjc0NDE4NzI2OTM4OTUyNDQ1OTgzODg2NzE4NzUuamZpZiIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjI1MCwiZml0IjoiY292ZXIifX19",
    },
  ];

  return (
    <div className="px-6 py-12 bg-white">
      <h1 className="text-4xl xs:text-2xl font-bold mb-10 ml-20 xs:ml-0">Places to visit in Srinagar</h1>
      <div className="grid grid-cols-1 xs:w-full sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-20 xs:mx-0">
        {places.map((place, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={place.image}
              alt={place.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
              <h2 className="text-lg font-bold text-white font-mono">{place.title}</h2>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-white font-serif">{place.rating}</span>
                <span className="text-gray-300 ml-2 text-sm font-serif">
                  ({place.reviews})
                </span>
              </div>
            </div>
            {/* Custom Right-bottom arrow */}
            <button
              className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md transform hover:scale-125 mx-4"
              title="Explore"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 text-lg font-semibold text-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl border border-black">
          View More
        </button>
      </div>
    </div>
  );
};

export default PlacesToVisit;
