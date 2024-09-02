import React from 'react';
import '../../Styles/CardStyles.css';

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h2 className="card-title font-bold uppercase">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
