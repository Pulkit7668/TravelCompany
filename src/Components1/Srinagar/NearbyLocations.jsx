import React from "react";

const NearbyLocations = () => {
  const locations = [
    {
      name: "Sonamarg",
      description: "Nature and Spiritual, Adventure",
      price: "₹18,131/- per day",
      image:"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTQwMDM1MDgwMDM4NjAyMzUyMTQyMzMzOTg0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==",
    },
    {
      name: "Gulmarg",
      description: "Nature and Spiritual",
      price: "₹11,455/- per day",
      image:"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTc1MzIyNzY4NzExMzgwOTU4NTU3MTI4OTA2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      name: "Pahalgam",
      description: "Nature and Spiritual, Adventure",
      price: "₹12,000/- per day",
      image:"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTY0Mjk0OTEyNzg0MjI4MzI0ODkwMTM2NzE4OC53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      name: "Jammu",
      description: "Nature and Spiritual, Adventure",
      price: "₹5,346/- per day",
      image:"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwOTgzNzA0MDYyOTkzNTI2NDU4NzQwMjM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==",
    },
    {
      name: "Dachigam National Park",
      description: "Nature and Spiritual, Adventure",
      price: "₹4,500/- per day",
      image:"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEzOTQwNTkxMzg3NzQ4NzE4MjYxNzE4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      name: "Vaishno Devi",
      description: "Nature and Spiritual, Heritage",
      price: "₹10,000/- per day",
      image:"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU2MDYyMjg1MzQ0NjAwNjc3NDkwMjM0NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
  ];

  return (
    <div className="px-8 py-12 bg-white">
      <h1 className="text-3xl font-bold ml-20 mb-10 xs:ml-0">
        Nearby Locations to Srinagar
      </h1>
      <div className="grid grid-cols-1 xs:w-full md:grid-cols-2 lg:grid-cols-6 gap-6 mx-20 xs:mx-0">
        {locations.map((location, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-2">
              <h2 className="text-base font-bold mb-2">{location.name}</h2>
              <p className="text-xs font-medium mb-1">{location.description}</p>
              <p className="text-sm font-medium text-gray-800">
                From {location.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-2 border border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition-all duration-300">
          Unlock your personalized adventure
        </button>
      </div>
    </div>
  );
};

export default NearbyLocations;
