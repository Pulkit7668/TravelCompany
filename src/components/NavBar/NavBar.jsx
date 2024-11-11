import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };


  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white border-b shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2 relative">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9sb2dvLW9ubHkuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ==" alt="logo" className="w-12 h-12 ml-20" />
        <span className="font-bold text-black absolute left-28 top-5">thetarzanway</span>
      </div>

      {/* Search Box */}
      <div className="flex-1 mx-4 ml-72 hidden md:block">
        <div className="relative max-w-screen-sm">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l5 5" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none  "
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4 mr-10">
        <button className="bg-yellow-300 text-black hover:bg-black hover:text-white border border-black font-semibold py-2 px-4 rounded-md transition-all hidden md:block">
          Create a Trip
        </button>
        <div className="relative flex items-center">
          {
            isAuthenticated && (
              <div className='flex items-center justify-center border py-2 rounded-full border-black cursor-pointer'>
                <img className='h-8 w-8 rounded-full ml-3 border border-black' src={user.picture} alt={user.name} />
                <p className='text-lg font-medium px-2 cursor-pointer'>{user.name}</p>
              </div>
            )
          }
          {
            isAuthenticated ? (
              <button className='bg-yellow-300 text-black hover:bg-black hover:text-white border border-black font-semibold ml-4 px-2 py-2 rounded-3xl transition-all' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()} className="flex items-center text-black">
                <span className="sr-only">Account Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4 0-8 1.99-8 4v2h16v-2c0-2.01-4-4-8-4z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )
          }
        </div>
        {/* Search Icon */}
        <button onClick={handleSearchClick} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l5 5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

// import React, { useState } from 'react';
// import { useAuth0 } from "@auth0/auth0-react";

// function Navbar() {
//   const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isSearchOpen, setSearchOpen] = useState(false);

//   return (
//     <nav className="w-full flex items-center justify-between p-4 bg-white border-b shadow-sm">
//       {/* Logo */}
//       <div className="flex items-center space-x-2 relative">
//         <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9sb2dvLW9ubHkuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ==" alt="logo" className="w-12 h-12 ml-20" />
//         <span className="font-bold text-black absolute left-28 top-5">thetarzanway</span>
//       </div>

//       {/* Search Box */}
//       <div className={`flex-1 mx-4 ${isSearchOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center`}>
//         <div className="relative max-w-screen-sm">
//           <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l5 5" />
//             </svg>
//           </span>
//           <input
//             type="text"
//             placeholder="Where do you want to go?"
//             className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none"
//           />
//         </div>
//       </div>

//       {/* Buttons and Icons */}
//       <div className="flex items-center space-x-4 md:mr-10">
//         <button className="bg-yellow-300 text-black hover:bg-black hover:text-white border border-black font-semibold py-2 px-4 rounded-md transition-all hidden md:block">
//           Create a Trip
//         </button>
        
//         {/* Profile and Auth Buttons */}
//         <div className="relative flex items-center">
//           {isAuthenticated ? (
//             <div className="flex items-center">
//               <img className="h-8 w-8 rounded-full ml-3 border border-black" src={user.picture} alt={user.name} />
//               <p className="text-lg font-medium px-2">{user.name}</p>
//               <button onClick={() => logout({ returnTo: window.location.origin })} className="bg-yellow-300 text-black hover:bg-black hover:text-white border border-black font-semibold ml-4 px-2 py-2 rounded-3xl transition-all">
//                 Log Out
//               </button>
//             </div>
//           ) : (
//             <button onClick={() => loginWithRedirect()} className="flex items-center text-black">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4 0-8 1.99-8 4v2h16v-2c0-2.01-4-4-8-4z" />
//               </svg>
//               <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//           )}
//         </div>

//         {/* Search Icon */}
//         <button onClick={() => setSearchOpen(!isSearchOpen)} className="md:hidden">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l5 5" />
//           </svg>
//         </button>

//         {/* Menu Icon */}
//         <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-16 right-0 w-3/4 bg-white shadow-lg md:hidden p-4 rounded-lg">
//           <ul className="space-y-4">
//             <li><button className="w-full text-left" onClick={loginWithRedirect}>Login/Signup</button></li>
//             <li><button className="w-full text-left">Home</button></li>
//             <li><button className="w-full text-left">Notifications</button></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
