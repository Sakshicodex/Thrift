import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from './CartIcon';
import CartModal from './CartModal';
import logo from '../images/logo.png'
import { influencerProducts } from './InfluencerProduct';


import { FaSearch, FaUser, FaBars, FaShoppingBag, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();


  const toggleSearch = () => {
    setSearchActive((prev) => !prev);
    if (searchActive) {
      setSearchTerm(''); // Clear the search term when closing the search bar
    }


  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() !== '') {
      const searchResults = [];
      for (const influencer in influencerProducts) {
        const matchingProducts = influencerProducts[influencer].filter(product =>
          product.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        searchResults.push(...matchingProducts);
      }
      setFilteredProducts(searchResults);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate('/search', { state: { filteredProducts, searchTerm } });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible((prev) => !prev);
  };


  const headerColor = "#D0CBB9";

  return (

    <div className="flex items-center relative w-full" style={{
      backgroundColor: headerColor,
      color: '#000',
      height: '8vh', // Reduced height based on viewport height
      minHeight: '50px', // Minimum height for small screens

    }}>
      <FaBars className="text-2xl ml-4 cursor-pointer" onClick={toggleMobileMenu} style={{ color: '#000' }} /> {/* Explicit style for icon */}

      {isMobileMenuVisible && (
        <div className="fixed inset-0 w-full md:w-1/4 h-full bg-white text-black shadow-lg z-50">
          <div className="p-4 flex justify-end">
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
          </div>
          <div className="flex flex-col items-start p-4 text-lg font-medium">
            <Link to="/influencer" className="py-2 hover:text-gray-700" onClick={toggleMobileMenu}>Influencer CLOSET</Link>
            <Link to="/bag" className="py-2 hover:text-gray-700" onClick={toggleMobileMenu}>Bags</Link>
            <a href="#!" className="py-2 hover:text-gray-700">ABOUT US</a>
            <a href="#!" className="py-2 hover:text-gray-700">Contact US</a>
          </div>
        </div>
      )}
      <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        <h1 className="text-5xl font-bold" style={{ fontFamily: "'Jim Nightshade', cursive", color: '#000' }}>
          Uttaran
        </h1>
      </Link>

      <div className="flex items-center ml-auto mr-4">
        {searchActive && (
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="text-gray-800 px-4 py-2 rounded-l-md focus:outline-none"
              autoFocus
            />
            <button type="submit" className="p-2 rounded-r-md bg-gray-700">
              <FaSearch style={{ color: '#000' }} />
            </button>
            
          </form>
        )}
        <FaSearch className={`text-xl cursor-pointer ml-6 ${searchActive ? 'hidden' : 'block'}`} onClick={toggleSearch} />
        <Link to="/cart">
          <FaShoppingBag className="text-2xl cursor-pointer ml-6" />
        </Link>
        <CartIcon />
        <Link to={isLoggedIn ? "/profile" : "/login"}>
          <FaUser className="text-2xl cursor-pointer ml-6" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
