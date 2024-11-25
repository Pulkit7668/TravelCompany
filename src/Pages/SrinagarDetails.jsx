// import React, { useEffect } from "react";
// import Itinerary from "../Components1/Srinagar/ItineraryPage";
// import Stays from '../Components1/Srinagar/Stays'
// import Activities from "../Components1/Srinagar/Activities";
// import Navbar from '../components/NavBar/NavBar'

// function SrinagarDetails() {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const routeData = [
//     { city: "Srinagar", nights: null, color: "bg-black" },
//     { city: "Srinagar", nights: "1 Night", color: "bg-blue-500" },
//     { city: "Pahalgam", nights: "2 Nights", color: "bg-yellow-400" },
//     { city: "Gulmarg", nights: "1 Night", color: "bg-red-500" },
//     { city: "Srinagar", nights: "1 Night", color: "bg-green-600" },
//     { city: "New Delhi", nights: "3 Nights", color: "bg-orange-500" },
//   ];

//   return (
//     <>
//     <Navbar />
//     <div className="p-8 min-h-screen">
//       <div className="w-[100%] mx-auto rounded-lg">
//         {/* Header Section */}
//         <div className="p-6">
//           <h1 className="text-5xl font-bold">Winter Wonderland Kashmir</h1>
//           <p className="text-gray-600 text-lg mt-5 ml-5">Budget</p>
//           <p className="text-green-600 text-lg font-medium ml-5">Affordable</p>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-3 gap-4 p-6">
//           <div className="col-span-2">
//             <img
//               src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3phbnNrYXIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvdmVyIn19fQ=="
//               alt="Main View"
//               className="w-full h-auto rounded-lg object-cover"
//             />
//           </div>
//           <div className="grid grid-rows-2 gap-4">
//             <img
//               src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L2thc2hibG9nLTEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MzYsImhlaWdodCI6MTUwLCJmaXQiOiJjb3ZlciJ9fX0="
//               alt="Side View 1"
//               className="w-full h-auto rounded-lg object-cover"
//             />
//             <img
//               src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5LzEtMjUtMTUxMTU5NzczNy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQzNiwiaGVpZ2h0IjoxNTAsImZpdCI6ImNvdmVyIn19fQ=="
//               alt="Side View 2"
//               className="w-full h-auto rounded-lg object-cover"
//             />
//           </div>
//         </div>

//         {/* Button */}
//         <div className="px-6 py-4 flex items-center justify-between border-t">
//           <div className="flex space-x-10">
//             <button className="text-gray-600 text-lg font-medium border-b-2 border-transparent hover:border-yellow-400 hover:text-yellow-400 hover:bg-[#262626] rounded-md px-4 py-1 transition-all duration-300 ease-in-out">
//               Brief
//             </button>
//             <button className="text-gray-600 text-lg font-medium hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:bg-[#262626] rounded-md px-4 py-1 transition-all duration-300 ease-in-out">
//               Itinerary
//             </button>
//             <button className="text-gray-600 text-lg font-medium hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:bg-[#262626] rounded-md px-4 py-1 transition-all duration-300 ease-in-out">
//               Stays
//             </button>
//             <button className="text-gray-600 text-lg font-medium hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:bg-[#262626] rounded-md px-4 py-1 transition-all duration-300 ease-in-out">
//               Activities
//             </button>
//           </div>
//           <div>
//             <button className="bg-yellow-300 text-black text-lg font-semibold py-2 px-4 border border-black rounded-lg shadow-md hover:bg-black hover:text-white transition-all">
//               Log in to proceed
//             </button>
//           </div>
//         </div>

//         <hr className="bg-black h-[1px]" />

//         {/* Route Section */}
//         <div className="p-6">
//           <h2 className="text-3xl font-bold mb-10">Route</h2>
//           <div className="flex items-center space-x-8">
//             {routeData.map((item, index) => (
//               <div key={index} className="flex items-center space-x-4">
//                 {/* Circle */}
//                 <div className={`w-6 h-6 rounded-full ${item.color}`}></div>
//                 {/* City and Nights Info */}
//                 <div>
//                   <p className="text-black text-sm font-semibold">
//                     {item.city} {item.nights && `- ${item.nights}`}
//                   </p>
//                 </div>
//                 {/* Line */}
//                 {index !== routeData.length - 1 && (
//                   <div className="w-10 h-[1px] bg-gray-400"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//         <Itinerary />
//         <Stays />
//         <Activities />
//       </div>
//     </div>
//     </>
//   );
// }

// export default SrinagarDetails;

import React, { useEffect } from "react";
import Itinerary from "../Components1/Srinagar/ItineraryPage";
import Stays from '../Components1/Srinagar/Stays';
import Activities from "../Components1/Srinagar/Activities";
import Navbar from '../components/NavBar/NavBar';

function Srinagar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const routeData = [
    { city: "Srinagar", nights: null, color: "bg-black" },
    { city: "Srinagar", nights: "1 Night", color: "bg-blue-500" },
    { city: "Pahalgam", nights: "2 Nights", color: "bg-yellow-400" },
    { city: "Gulmarg", nights: "1 Night", color: "bg-red-500" },
    { city: "Srinagar", nights: "1 Night", color: "bg-green-600" },
    { city: "New Delhi", nights: "3 Nights", color: "bg-orange-500" },
  ];

  return (
    <>
      <Navbar />
      <div className="p-8 min-h-screen">
        <div className="w-[100%] mx-auto rounded-lg">
          {/* Header Section */}
          <div className="p-6">
            <h1 className="text-5xl font-bold xs:text-xl">Winter Wonderland Kashmir</h1>
            <p className="text-gray-600 text-lg mt-5 ml-5">Budget</p>
            <p className="text-green-600 text-lg font-medium ml-5">Affordable</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-3 gap-4 p-6">
            <div className="col-span-2">
              <img
                src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3phbnNrYXIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvdmVyIn19fQ=="
                alt="Main View"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <img
                src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L2thc2hibG9nLTEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MzYsImhlaWdodCI6MTUwLCJmaXQiOiJjb3ZlciJ9fX0="
                alt="Side View 1"
                className="w-full h-auto rounded-lg object-cover"
              />
              <img
                src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5LzEtMjUtMTUxMTU5NzczNy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQzNiwiaGVpZ2h0IjoxNTAsImZpdCI6ImNvdmVyIn19fQ=="
                alt="Side View 2"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Button */}
          <div className="px-6 py-4 flex items-center justify-between border-t">
            <div className="flex space-x-10">
              <button className="text-gray-600 text-lg font-medium hover:border-yellow-400 hover:border-b-2 hover:text-yellow-400 hover:bg-[#262626] rounded-md px-4 py-1 transition-all duration-300 ease-in-out xs:hidden">
                Brief
              </button>
              <button className="text-gray-600 text-lg font-medium hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:bg-[#262626] rounded-md px-4 py-1 transition-all duration-300 ease-in-out xs:hidden">
                Itinerary
              </button>
              <button className="text-gray-600 text-lg font-medium hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:bg-[#262626] rounded-md px-4 py-1 transition-all duration-300 ease-in-out xs:hidden">
                Stays
              </button>
              <button className="text-gray-600 text-lg font-medium hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:bg-[#262626] rounded-md px-4 py-1 transition-all duration-300 ease-in-out xs:hidden">
                Activities
              </button>
            </div>
            <div>
              <button className="bg-yellow-300 text-black text-lg font-semibold py-2 px-4 border border-black rounded-lg shadow-md hover:bg-black hover:text-white transition-all">
                Log in to proceed
              </button>
            </div>
          </div>

          <hr className="bg-black h-[1px]" />

          {/* Route Section */}
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-10">Route</h2>
            <div className="flex xs:flex-col sm:flex-row items-center justify-start xs:space-y-4 sm:space-x-8">
              {routeData.map((item, index) => (
                <div key={index} className="flex xs:flex-col sm:flex-row items-center xs:space-x-0 sm:space-x-8 xs:justify-center sm:justify-start">
                  {/* Circle */}
                  <div className={`w-6 h-6 rounded-full ${item.color} mb-2 xs:mx-auto sm:mx-0`}></div>

                  {/* City and Nights Info */}
                  <div className="xs:text-center sm:text-left">
                    <p className="text-black text-sm font-semibold">
                      {item.city} {item.nights && `- ${item.nights}`}
                    </p>
                  </div>

                  {/* Line - Only show line if not the last item */}
                  {index !== routeData.length - 1 && (
                    <div className="xs:h-10 sm:h-[1px] bg-gray-400 xs:w-[1px] sm:w-10"></div> // Line for vertical layout (xs) only
                  )}
                </div>
              ))}
            </div>
          </div>

          <Itinerary />
          <Stays />
          <Activities />
        </div>
      </div>
    </>
  );
}

export default Srinagar;
