import React from "react";

const ThingsToDo = () => {
  const activities = [
    {
      title: "Hot Air Balloon Ride in Srinagar",
      description:
        "Embark on a magical journey above the picturesque landscapes of Srinagar with a hot air balloon ride that promises a unique...",
      price: "₹1,000/-",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvYWN0aXZpdGllcy8xNzA2NTI5NjAxMzUwMTc1ODU3NTQzOTQ1MzEyNTAuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjI1MCwiZml0IjoiY292ZXIifX19",
    },
    {
      title: "Pashmina Factory Visit in Srinagar",
      description:
        "Visiting a Pashmina factory is an immersive and enlightening experience, providing a glimpse into the intricate...",
      price: "₹300/-",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvYWN0aXZpdGllcy8xNzA2NTMwMzE3NjM2OTc3NjcyNTc2OTA0Mjk2ODguanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjI1MCwiZml0IjoiY292ZXIifX19",
    },
    {
      title: "Shikara Ride in Srinagar",
      description:
        "A Shikhara is a traditional Gondola type light rowing boat which is mostly seen on the pristine Dal Lake, apart from other...",
      price: "₹400/-",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvYWN0aXZpdGllcy8xNzA2NTMwNjIyMTU0MTU4MzUzODA1NTQxOTkyMTkuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjI1MCwiZml0IjoiY292ZXIifX19",
    },
    {
      title: "Bat Factory Visit",
      description:
        "Kashmir region is famous for producing high-quality bats and cricket is like a festive bonanza among local lads. With the...",
      price: "₹500/-",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvYWN0aXZpdGllcy8xNzA2NTMwOTQ4ODgzNzM3MDg3MjQ5NzU1ODU5MzguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6MjUwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
  ];

  return (
    <div className="px-6 py-12 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 ml-20 xs:ml-0">
        Things to do in Srinagar
      </h1>
      <div className="grid grid-cols-1 xs:w-full sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-20 xs:mx-0">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-gray-50 border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden h-[65vh] hover:border-yellow-400 transition-all duration-300"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-[90%] xs:w-full h-44 object-cover rounded-lg ml-[18px] xs:ml-0 mt-4 xs:mt-0 mb-10"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-5">
                {activity.title}
              </h2>
              <p className="text-sm font-semibold mb-5">{activity.description}</p>
              <p className="text-lg font-bold mb-1">{activity.price} <span className="text-xs text-gray-600">per person</span></p>
              <p className="text-xs text-gray-500">Excluding applicable taxes</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-10 py-2 mt-5 text-lg font-semibold text-black border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300">
          Craft a trip to Srinagar now!
        </button>
      </div>
    </div>
  );
};

export default ThingsToDo;
