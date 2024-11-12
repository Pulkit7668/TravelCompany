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
    <section className="flex justify-center items-center md:mt-10 h-[80vh] md:h-full">
      <div className="w-[80vw] h-[80vh] p-6">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Why plan with us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </section>
  );
};

export default WhyPlanWithUs;

