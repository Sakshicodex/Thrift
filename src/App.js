import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Hero from './components/hero';
import InfluencerPage from './components/influencerpage';
import BagPage from './components/bagpage';
import Login from './components/login';
import SignUp from './components/signup';
import Profile from './components/profile';
import InfluencerProfile from './components/Influencerprofile';
import CartPage from './components/CartPage';
import AddressPage from './components/Address';
import NewAddress from './components/NewAddress';




const App = () => {
  return (
   
    <BrowserRouter>
    <div className="">
      <Routes>

      <Route path="/" element={<Hero />} />
      <Route path="/influencer" element={<InfluencerPage />} /> {/* Specify the Home component */}
      <Route path="/bag" element={<BagPage />} /> 
      <Route path="/influencer/:name" element={<InfluencerProfile />} />
      <Route path="/login" element={<Login/>} /> 
      <Route path="/signup" element={<SignUp/>} /> 
      <Route path="/profile" element={<Profile/>} /> 
      <Route path="/cart" element={<CartPage />} /> 
      <Route path="/address" element={<AddressPage />} /> 
      <Route path="/newaddress" element={<NewAddress />} /> 
      
    

      
      
      

        {/* Add more routes for other pages if needed */}
      </Routes>
    </div>
  </BrowserRouter>

  );
};

export default App;
