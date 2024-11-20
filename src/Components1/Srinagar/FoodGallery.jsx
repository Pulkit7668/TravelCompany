import React from "react";

const FoodGallery = () => {
  const foods = [
    {
      name: "Kashmiri Dum Aloo",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZm9vZC8xNjUzOTk5NDAzNTMwOTAxNDMyMDM3MzUzNTE1NjIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6OTAwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      name: "Modur Pulao",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZm9vZC8xNjUzOTk5NjM3MzE5NDg2MTQxMjA0ODMzOTg0MzguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6OTAwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      name: "Mughal Nihari",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZm9vZC8xNjIzMDc4MDQ5NTUxMjMwMTkyMTg0NDQ4MjQyMTkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6OTAwLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      name: "Rogan Josh",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZm9vZC8xNjc0NDY1NDM5NTc0Mzc2ODIxNTE3OTQ0MzM1OTQuamZpZiIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIifX19",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 ml-20">Food to eat</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-20">
        {foods.map((food, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={food.image}
              alt={food.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {food.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
