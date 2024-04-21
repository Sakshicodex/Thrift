import React from 'react';
import KritikaImage from '../images/1.jpg';
import JannatImage from '../images/2.jpg';
import DeekshaImage from '../images/3.jpg';
import ReemImage from '../images/4.jpg';
import AvishkaImage from '../images/5.jpg'
import IshaImage from '../images/6.jpg';
import ElishaImage from '../images/7.jpg';
import PalakImage from '../images/8.jpg';
import AvneetImage from '../images/9.jpg';
import AnushkaImage from '../images/10.jpg';
import BiImage from '../images/beomgyu.jpg';
import SoImage from '../images/Soobin.jpg';

import { Link } from 'react-router-dom';

const influencers = [
  { name: 'Kritika Khurana', image: KritikaImage },
  { name: 'Jannat Zubair', image:JannatImage },
  { name: 'Deeksha Khurana', image: DeekshaImage },
  { name: 'Reem sameer Shaikh', image: ReemImage },
  { name: 'Avishka Pokhriyal', image:AvishkaImage },
  { name: 'Isha Malviya ', image: IshaImage},
  { name: 'Elisha Mayor', image: ElishaImage },
  { name: 'Palak Tiwari', image: PalakImage },
  { name: 'Avneet Kaur', image: AvneetImage },
  { name: 'Anushka Sen', image:AnushkaImage },
  { name: 'Beomgyu', image:BiImage },
  { name: 'Soobin', image:SoImage },
  
];

const InfluencerPage = () => {
  return (
    <div className="container mx-auto my-12 px-4 min-h-screen">
      <h2 className="text-4xl font-semibold text-center mb-10">Featured Influencer's</h2>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
        {influencers.map((influencer, index) => (
          <Link key={index} to={`/influencer/${encodeURIComponent(influencer.name)}`} className="flex flex-col items-center">
            <img src={influencer.image} alt={influencer.name} className="rounded-lg shadow-lg w-48 h-48 object-cover transition duration-300 ease-in-out transform hover:scale-110"/>
            <p className="mt-2 font-medium">{influencer.name}</p>
            <span className="cursor-pointer text-sm mt-1">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default InfluencerPage;
