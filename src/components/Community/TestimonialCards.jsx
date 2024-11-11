import React from 'react';

function TestimonialCards() {
  return (
    <div className='h-[120vh] md:mt-10'>
       <h1 className='text-3xl md:text-4xl font-bold md:ml-32 mb-10 text-center md:text-left'>Happy Community of The Tarzan Way</h1>
    <div className="max-w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 md:mx-28">
      {/* 1st Card */}
      <div className="rounded-lg p-6 flex gap-4 bg-white shadow-lg">
        <img
          src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9leHBsb3JlcnMvbmlzYWdyYS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6OTAwLCJmaXQiOiJjb3ZlciJ9fX0="
          alt="User"
          className="w-60 h-60 rounded-lg object-cover"
        />
        <div>
          <p className="text-black text-sm">
            The Tarzan way team I can’t thank you enough for <br /> helping me plan my
            trip. You guys are amazing. <br /> Janhavi & Devyani and the entire team
            kept <br /> checking on me. The entire team was so responsive & <br /> planned
            everything really well. I will definitely <br /> recommend TTW for any trip.
            Kudos to you guys. <br /> Lots of Love ❤️❤️
          </p>
          <p className="text-lg font-bold text-black mt-2">Nisarga Gauda</p>
          <div className="flex items-center mt-1">
            <div className="text-yellow-500 flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 font-semibold mt-1">5 Days • Kashmir</p>
          <button className="mt-4 px-12 py-2 text-sm font-semibold text-black bg-yellow-300 hover:bg-black hover:text-white transition-all border border-black rounded-md shadow-md">
            See itinerary
          </button>
        </div>
      </div>
      {/* 2nd Card */}
      <div className="rounded-lg p-6 flex gap-4 bg-white shadow-lg">
        <img
          src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9leHBsb3JlcnMvcHJhc2VuamVldC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6OTAwLCJmaXQiOiJjb3ZlciJ9fX0="
          alt="User"
          className="w-60 h-60 rounded-lg object-cover"
        />
        <div>
          <p className="text-black text-sm">
          Thank you The Tarzan Way...It was an experience to<br /> 
          remember and very moderate experience cost..Love <br />
          the way they handled things. Perfect hotels, rich <br />
          experience and memories to collect. Thanks TTW..  <br />
          will definitely look forward to the next trip..
          </p>
          <p className="text-lg font-bold text-black mt-2">Prasenjit Sharma</p>
          <div className="flex items-center mt-1">
            <div className="text-yellow-500 flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 font-semibold mt-1">6 Days • Kashmir</p>
          <button className="mt-4 px-12 py-2 text-sm font-semibold text-black bg-yellow-300 hover:bg-black hover:text-white transition-all border border-black rounded-md shadow-md">
            See itinerary
          </button>
        </div>
      </div>
      {/* 3rd Card */}
      <div className="rounded-lg p-6 flex gap-4 bg-white shadow-lg">
        <img
          src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9JTUctMjAyMjEyMzEtV0EwMDI3LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIifX19"
          alt="User"
          className="w-60 h-60 rounded-lg object-cover"
        />
        <div>
          <p className="text-black text-sm mb-10">
          Thank you for the trip plan TTW. We had a lot of fun. Please convey our gratitude for the cab driver. He was very humble, polite and helpful.
          </p>
          <p className="text-lg font-bold text-black mt-2">Hema Chandhiran</p>
          <div className="flex items-center mt-1">
            <div className="text-yellow-500 flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 font-semibold mt-1">8 Days • North East</p>
          <button className="mt-4 px-12 py-2 text-sm font-semibold text-black bg-yellow-300 hover:bg-black hover:text-white transition-all border border-black rounded-md shadow-md">
            See itinerary
          </button>
        </div>
      </div>
      {/* 4th Card */}
      <div className="rounded-lg p-6 flex gap-4 bg-white shadow-lg">
        <img
          src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9JTUctMjAyMjEyMjAtV0EwMDI1LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIifX19"
          alt="User"
          className="w-60 h-60 rounded-lg object-cover"
        />
        <div>
          <p className="text-black text-sm">
            Devayani and her team have been amazing from <br />
            their meticulous attention to detail, to answering all <br />
            my queries and their unwavering support via chat <br />
            and call throughout our journey. Our trip was <br />
            memorable thanks to the team at The Tarzan Way. I <br />
            cannot recommend them enough!
          </p>
          <p className="text-lg font-bold text-black mt-2">Eric Dsouza</p>
          <div className="flex items-center mt-1">
            <div className="text-yellow-500 flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 font-semibold  mt-1">10 Days • Meghalaya</p>
          <button className="mt-4 px-12 py-2 text-sm font-semibold text-black bg-yellow-300 hover:bg-black hover:text-white transition-all border border-black rounded-md shadow-md">
            See itinerary
          </button>
        </div>
      </div>
    </div>
    <div className='flex items-center justify-center'>
      <button className="mt-5 mb-5 px-10 py-2 text-md font-semibold text-black hover:bg-black hover:text-white transition-all border border-black rounded-md shadow-md">
            View All
      </button>
    </div>
    </div>
  );
}

export default TestimonialCards;
