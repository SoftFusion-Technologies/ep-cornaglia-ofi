import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const PricingCard = ({
  plan = 'Ejemplo',
  price = '$000.00/mes',
  description = 'Lore ipsum',
  featuresList = [1, 2, 3, 4],
  isMostPopular = false
}) => {
  return (
    <div
      className={`ml-5 h-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl bg-gray-50 border border-gray-100 border-opacity-10 rounded-lg
            shadow-xl my-8 max-w-80 ${
              isMostPopular
                ? 'scale-105 transform z-10 bg-gray-200'
                : 'scale-95 transform'
              }`}
    >
      <div className="text-3xl font-semibold">
        <h1 className="p-2">{plan}</h1>
        <h2 className="p-2 text-gray-700">{price}</h2>
      </div>
      <div className="text-lg bg-gray-100 border-gray-200 border-opacity-10 rounded-lg shadow-xl py-4">
        <p className="p-2">{description}</p>
        <ul>
          <li className="p-2">&#128200; {featuresList[0]}</li>
          <li className="p-2">&#128201; {featuresList[1]}</li>
          <li className="p-2">&#128222; {featuresList[2]}</li>
          <li className="p-2">&#128220; {featuresList[3]}</li>
        </ul>
        <div className="flex justify-center items-center">
        <button
            className={`m-4 py-4 w-full bg-red-500 text-white rounded-xl text-2xl hover:bg-red-300  
                        focus:ring-2 focus:ring-red-400 ${
                          isMostPopular
                            ? 'bg-red-400 hover:bg-red-500 focus:ring-2 focus:ring-red-500 text-white'
                            : null
                        }`}
          >
            CONTRATAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
