import React from 'react';
import '../../Styles/CardStyles.css';

const Card = ({ icon, title, description }) => {
  return (
    <div className="card w-[250px] h-[300px] mt-[-5rem] bg-white rounded-lg p-6 shadow-lg opacity-0 animate-fade-in-up transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <div className="card-icon text-blue-500 text-4xl mb-4">{icon}</div>
      <h2 className="card-title font-bold uppercase">{title}</h2>{' '}
      <p className="card-description text-gray-600 text-base">{description}</p>
    </div>
  );
};

export default Card;
