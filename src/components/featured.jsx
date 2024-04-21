import React from 'react';
import { Link } from 'react-router-dom';
import AmandaImage from '../images/1.jpg';
import GeorgiaImage from '../images/2.jpg';
import AlisonImage from '../images/3.jpg';
import ReemImage from '../images/4.jpg';
import AvishkaImage from '../images/5.jpg';

const influencers = [
  { name: 'Kritika Khurana', image: AmandaImage },
  { name: 'Jannat Zubair', image: GeorgiaImage },
  { name: 'Deeksha Khurana', image: AlisonImage },
  { name: 'Reem sameer Shaikh', image: ReemImage },
  { name: 'Avishka Pokhriyal', image: AvishkaImage },
];

const Featured = () => {
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-4xl font-semibold text-center mb-10">Featured Influencer's</h2>
      <div className="flex justify-center space-x-8">
        {influencers.map((influencer, index) => (
          <Link key={index} to={`/influencer/${encodeURIComponent(influencer.name)}`} className="flex flex-col items-center">
            <img src={influencer.image} alt={influencer.name} className="rounded-lg shadow-lg w-48 h-48 object-cover transition duration-300 ease-in-out transform hover:scale-110" />
            <p className="mt-4 font-medium">{influencer.name}</p>
            <span className="cursor-pointer text-sm mt-1">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
