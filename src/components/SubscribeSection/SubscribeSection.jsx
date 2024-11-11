import React from 'react';

const SubscribeSection = () => {
  return (
      <div className="w-full h-[50vh] bg-[#F7E700] text-center py-16 mt-5">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Join The Tarzan Way Community</h2>
      <p className="text-lg md:text-2xl mb-12">Get Early Bird Deals, Extra Discounts & Priority Customer Support.</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="First name"
          className="px-4 py-2 rounded-md border border-black w-[80%] md:w-60 h-14 focus:outline-none bg-[#F7E700]"
        />
        <input
          type="email"
          placeholder="Email address"
          className="px-4 py-2 rounded-md border border-black w-[80%] md:w-60 h-14 focus:outline-none bg-[#F7E700]"
        />
        <button className="bg-black text-white px-6 py-2 rounded-md font-bold w-60 h-14">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection;
