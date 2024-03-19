import React, { useState } from 'react';
import { FaSearch, FaUser, FaBars, FaShoppingBag, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleSearch = () => {
    setSearchActive((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible((prev) => !prev);
  };
  const brownColor = "#000000"

  return (
    <div className="bg-gray-800 text-white p-6 flex items-center relative" style={{ backgroundColor: brownColor }}>
      <FaBars className="text-2xl mr-4 cursor-pointer" onClick={toggleMobileMenu} />
      
      {isMobileMenuVisible && (
        <div className="fixed top-0 left-0 w-3/5 md:w-1/4 h-full bg-white text-black shadow-lg z-50">
          <div className="p-4 flex justify-end">
            <FaTimes className="text-xl cursor-pointer" onClick={toggleMobileMenu} />
          </div>
          <div className="flex flex-col items-start p-4">
            <a href="#!" className="py-2">MEN</a>
            <a href="#!" className="py-2">WOMEN</a>
            <a href="#!" className="py-2">UPCYCLED</a>
            <a href="#!" className="py-2">THRIFTY THINGS</a>
            <a href="#!" className="py-2">Influencer CLOSET</a>
            <a href="#!" className="py-2">SHOP LOCAL</a>
            <a href="#!" className="py-2">BOOKS</a>
           
            <a href="#!" className="py-2">ABOUT US</a>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold absolute left-1/2 transform -translate-x-1/2 hidden md:block" style={{ fontFamily: "'Roboto', sans-serif" }}>
        Uttaran
      </h1>

      <div className="flex items-center ml-auto">
        {/* Conditional rendering for the search bar */}
        {searchActive && (
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-gray-800 px-4 py-2 rounded-l-md focus:outline-none"
            autoFocus
          />
        )}
        {/* The search icon will always be visible */}
        <FaSearch className={`text-white text-xl cursor-pointer ${searchActive ? 'hidden' : 'block'}`} onClick={toggleSearch} />
        
        {/* Close icon */}
        {searchActive && (
          <FaTimes className="text-white text-2xl p-2 rounded-r-md bg-gray-700 cursor-pointer" onClick={toggleSearch} />
        )}
        
        {/* These icons will always be visible */}
        <FaShoppingBag className="text-white text-2xl ml-6 cursor-pointer" />
        <FaUser className="text-white text-2xl ml-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
