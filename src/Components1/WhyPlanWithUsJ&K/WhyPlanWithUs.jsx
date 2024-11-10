import React from 'react';

const WhyPlanWithUs = () => {
  const features = [
    {
      image: 'https://d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-1.png',
      title: 'Personalization in seconds',
      description: 'Personalized and flexible itineraries crafted by our AI-powered planner.',
      bgColor: 'bg-orange-100',
    },
    {
      image: 'https://d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-2.png',
      title: 'Real-Time Negotiated Bookings',
      description: 'Dedicated travel experts negotiate the best prices within your budget.',
      bgColor: 'bg-red-100',
    },
    {
      image: 'https://d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-3.png',
      title: 'Book-it-all in one click',
      description: 'Book all your personalized and flexible travel needs in just one click.',
      bgColor: 'bg-blue-100',
    },
    {
      image: 'https://d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-4.png',
      title: '24x7 Live Assistance',
      description: '24x7 support that keeps you swinging all day and night, no monkey business!',
      bgColor: 'bg-green-100',
    },
    {
      image: 'https://d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-5.png',
      title: 'Offbeat Experiences, curated for you',
      description: 'Discover offbeat adventures, activities & experiences.',
      bgColor: 'bg-purple-100',
    },
    {
      image: 'https://d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-6.png',
      title: 'Transparent Pricing',
      description: 'Transparent pricing with no hidden fees - pay only a small service fee!',
      bgColor: 'bg-teal-100',
    },
  ];

  return (
    <>    
    <h2 className="text-3xl font-bold mb-5 ml-28 mt-10">Why plan with us?</h2>
    <section className="flex justify-center items-center mx-20 mb-20">
      <div className="w-[70vw] h-[70vh] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center p-4 rounded-lg ${feature.bgColor} shadow-md`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-12 h-12 rounded-lg mr-4"
              />
              <div>
                <h3 className="font-bold text-2xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-3xl font-bold mb-5">Get your free travel plan now</h2>
          
          <label className="block mb-2 text-lg font-bold">What do you want to explore?</label>
          <input type="text" placeholder="Delhi, IN" className="w-full mb-1 p-3 border rounded-md focus:outline-none" />
          <input type="text" placeholder="Search Destination" className="w-full mb-4 p-3 border rounded-md focus:outline-none" />
          
          <label className="block mb-2 text-lg font-bold">When are you planning to travel?</label>
          <div className='text-md font-bold flex items-center justify-between mr-32 mb-1'>
            <p>Start Date</p>
            <p>End Date</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
            <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
          </div>
          <div className="flex items-center text-center mt-3 ml-2">
            <input type="checkbox" id="unsure" className="mr-2" />
            <label htmlFor="unsure" className="text-sm font-semibold">Not sure? Let us decide best time for your trip.</label>
          </div>

          <button className="bg-yellow-300 hover:bg-black text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
            Continue
          </button>
      </div>
    </section>
    </>
  );
};

export default WhyPlanWithUs;

