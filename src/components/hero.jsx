import React from 'react';
import HomePage from './home';
import Shop from './shop';
import Featured from './featured';
import Product from './product'; 
import ShopBags from './shopbags';
import Header from './header';

import Footer from './footer';


import Bag from './bag';



const Hero = () => {
  return (
    <>
    <Header/>
    <HomePage />
      <Shop />
      <Featured/>
      <Product/>
      <ShopBags/>
      <Bag/>
      
      
      <Footer/>
     
      
    </>
  );
};

export default Hero;
