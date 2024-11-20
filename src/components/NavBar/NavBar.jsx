import React, { useState, useEffect, useRef } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import Form from '../HeaderSection/Form'

function Navbar() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white border-b shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2 relative xs:-left-20">
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
            className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4 mr-0">
        <button onClick={() => handleFormOpen(true)} className="bg-yellow-300 text-black hover:bg-black hover:text-white border border-black font-semibold py-2 px-4 rounded-md transition-all hidden md:block">
          Create a Trip
        </button>
        {isFormOpen && <Form onClose={handleFormClose} />}

        {/* Search Icon (for mobile) */}
        <button onClick={handleSearchClick} className="md:hidden bg-gray-200 rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l5 5" />
          </svg>
        </button>

        {/* Menu Icon (small screens) */}
        <button onClick={toggleMenu} className="relative md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* User Icon (medium and larger screens) */}
        <button onClick={toggleMenu} className="hidden md:block md:border md:border-black md:rounded-full">
          {isAuthenticated ? (
            <img src={user.picture} alt="User" className="h-8 w-8 rounded-full" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4 0-8 1.99-8 4v2h16v-2c0-2.01-4-4-8-4z" />
            </svg>
          )}
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div ref={menuRef} className="absolute right-10 mt-12 w-52 bg-white border rounded-md shadow-lg py-2 z-10">
            {isAuthenticated ? (
              <>
                <div className="px-4 py-2 text-gray-700 flex items-center">
                  <img className="h-8 w-8 rounded-full mr-2" src={user.picture} alt={user.name} />
                  <span className='text-sm font-semibold'>Hello, {user.name}</span>
                </div>
                <button
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  className="block w-full text-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Log Out
                </button>
              </>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Log In
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;