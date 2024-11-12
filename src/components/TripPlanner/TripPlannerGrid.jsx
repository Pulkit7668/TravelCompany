import React from 'react';

const TripPlannerGrid = () => {
  return (
      <div className='px-4 py-6'>
       <h1 className='text-3xl md:text-4xl font-bold text-center md:text-left mb-8 md:ml-32 3xl:ml-48'>Plan trip as per mood</h1>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-[80vw] mx-auto">
         {/* Offbeat Trip Planner (Top-left large image) */}
         <div className="relative col-span-2 md:col-span-2 row-span-1 h-52 md:h-80">
           <img
             src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDUwODgzNDM5OTM2MTYxMDQxMjU5NzY1NjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="
             alt="Offbeat Trip Planner"
             className="w-full h-full object-cover rounded-lg"
           />
           <div className="absolute top-4 left-4 text-white text-lg md:text-xl font-bold">
             Offbeat Trip Planner
           </div>
           <span className='absolute top-12 left-5 text-white text-xl font-light'>Explore</span>
         </div>

         {/* Workcation Trip Planner (Top-right small image) */}
         <div className="relative col-span-2 md:col-span-2 h-52 md:h-60">
           <img
             src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDU3NDI5ODg4NTM1OTc2NDA5OTEyMTA5MzguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="
             alt="Workcation Trip Planner"
             className="w-full h-full object-cover rounded-lg"
           />
           <div className="absolute top-4 left-4 text-white text-lg md:text-xl font-bold">
             Workcation Trip Planner
           </div>
           <span className='absolute top-12 left-5 text-white text-lg md:text-xl font-light'>Explore</span>
         </div>

         {/* Road Trip Planner (Bottom-left small image) */}
         <div className="relative col-span-2 md:col-span-1 h-52 md:h-60">
           <img
             src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDUwODk1ODQ2MDk3OTQ2MTY2OTkyMTg3NTAucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="
             alt="Road Trip Planner"
             className="w-full h-full object-cover rounded-lg"
           />
           <div className="absolute top-4 left-4 text-white text-lg md:text-xl font-bold">
             Road Trip Planner
           </div>
           <span className='absolute top-12 left-5 text-white text-lg md:text-xl font-light'>Explore</span>
         </div>

         {/* Trips Planned (Center text box) */}
         <div className="flex items-center justify-center h-52 md:h-60 border border-black rounded-lg col-span-2 md:col-span-1">
           <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold">69k+</h2>
             <p className="text-lg font-semibold">Trips Planned so far.</p>
           </div>
         </div>

         {/* Volunteer Trip Planner (Bottom-right small image) */}
         <div className="relative col-span-2 md:col-span-2 h-60 md:h-80 md:bottom-20">
           <img
             src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDczMzE2MTAyNDY5NDQ0Mjc0OTAyMzQzNzUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="
             alt="Volunteer Trip Planner"
             className="w-full h-full object-cover rounded-lg"
           />
           <div className="absolute top-4 left-4 text-white text-lg md:text-xl font-bold">
             Volunteer Trip Planner
           </div>
           <span className='absolute top-12 left-5 text-white text-lg md:text-xl font-light'>Explore</span>
         </div>
       </div>
       <div className='flex items-center justify-center mt-5 md:-mt-10'>
       <button className="bg-yellow-300 hover:bg-black text-black hover:text-white border border-black text-center transition-all font-semibold py-2 px-8 md:px-10 rounded-lg">Create your free itinerary</button>
       </div>
      </div>
  );
};

export default TripPlannerGrid;