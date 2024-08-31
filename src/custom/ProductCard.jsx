import React from 'react';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="relative group w-11/12 h-78 mx-auto">
      {' '}
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-center items-center text-white text-center p-4">
        <h2 className="text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title}
        </h2>
        <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
