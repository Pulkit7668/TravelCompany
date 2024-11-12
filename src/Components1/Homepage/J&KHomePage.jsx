import React from 'react';

function JandKHomePage() {
  return (
    <header className="relative h-[60vh] sm:h-[70vh] md:h-[100vh] 3xl:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM1MDYxMDA4NTA0MzkwNzE2NTUyNzM0MzguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMjQwLCJoZWlnaHQiOjEwNDAsImZpdCI6ImNvdmVyIn19fQ=="
        alt="Background"
        className="absolute inset-0 w-[100%] h-5/6 object-cover"
      />
      
      {/* Shadow */}
      <div className=" absolute h-5/6 inset-0 bg-black opacity-25"></div>
      
      {/* Content */}
      <div className="relative flex items-center justify-between px-10 h-full">
        {/* Left Side Text Content */}
        <div className="text-white md:space-y-6 absolute top-40 md:top-16 sm:left-28 md:left-24 left-32 text-center md:text-left">
          <h1 className="text-xl mb-5 font-bold sm:text-2xl md:text-5xl md:font-extrabold leading-tight">Jammu & Kashmir Trip Planner</h1>
          <p className="text-xl mb-5 sm:text-2xl">Bid farewell to generic holiday packages. <br /> Get Your AI-Personalised Itineraries</p>
          <button className="bg-yellow-300 hover:bg-black text-black hover:text-white transition-all border border-black font-bold py-3 px-6 rounded-md mt-4">
            Plan Itinerary For Free!
          </button>
        </div>
        
        {/* Right Side Form */}
        <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-lg max-w-md absolute right-24 top-16 hidden lg:block">
          <h2 className="text-3xl font-bold mb-7">Get your free travel plan now</h2>
          
          <label className="block mb-2 text-lg font-bold">What do you want to explore?</label>
          <input type="text" placeholder="Delhi, IN" className="w-full mb-1 p-3 border rounded-md focus:outline-none" />
          <input type="text" placeholder="Jammu & Kashmir" className="w-full mb-4 p-3 border rounded-md focus:outline-none" />
          
          <label className="block mb-3 text-lg font-bold">When are you planning to travel?</label>
          <div className='text-md font-bold flex items-center justify-between mr-32 mb-1'>
            <p>Start Date</p>
            <p>End Date</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
            <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
          </div>
          <div className="flex items-center text-center mt-6 ml-2">
            <input type="checkbox" id="unsure" className="mr-2" />
            <label htmlFor="unsure" className="text-sm font-semibold">Not sure? Let us decide best time for your trip.</label>
          </div>

          <button className="bg-yellow-300 hover:bg-black text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
            Continue
          </button>
        </div>
      </div>
      
      {/* Bottom Icons */}
      <div className="absolute bottom-48 mx-5 sm:bottom-52 sm:mx-10 md:bottom-40 md:left-32 flex space-x-24 text-white text-center">
        <div className="flex flex-col items-center">
          <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvZ2VuZXJhbC90cmF2ZWwucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ==" alt="Icon 1" className="h-10 mb-2 invert" />
          <span>Free Personalized <br /> Itineraries</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvZ2VuZXJhbC9ib29raW5nLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciJ9fX0=" alt="Icon 2" className="h-10 mb-2 invert" />
          <span>Affordable & Flexible <br /> Bookings</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvZ2VuZXJhbC9tb25leS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19" alt="Icon 3" className="h-10 mb-2 invert" />
          <span>Zero Hidden <br /> Charges</span>
        </div>
      </div>
    </header>
  );
}

export default JandKHomePage;