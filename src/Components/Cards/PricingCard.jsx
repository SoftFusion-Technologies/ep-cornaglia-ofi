import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const PricingCard = ({
  plan = 'Ejemplo',
  price = '$000.00/mes',
  mainFeature = "Servicio de hasta MB + 164 de canales",
  channels = "+ 164 de canales",
  featuresList = [
    "Soporte técnico de lunes a viernes para ambos servicios", 
    "Canales locales", 
    "Sin mínimo de permanencia", 
    "2 meses de pack adicional sin cargo"
  ],
  isMostPopular = false,
  consult = "Consultar vigencia mensual de los pack sin cargo", 
  contract = "Contratar"
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
      <div className="text-3xl font-semibold text-center">
        <h1 className="py-4 text-5xl ">{plan}</h1>
        <h2 className="pb-4 text-gray-700 text-4xl">{price}<span className='text-xl'>/MES</span></h2>
      </div>
      <div className="text-lg bg-gray-100 border-gray-200 border-opacity-10 rounded-lg shadow-xl py-4">
        
        <ul>
          <li className="p-2 font-bold">{mainFeature} <br></br>{channels}</li>
          <li className="p-2">{featuresList[0]}</li>
          <li className="p-2">{featuresList[1]}</li>
          <li className="p-2">{featuresList[2]}</li>
          <li className="p-2">{featuresList[3]}</li>
          <li className="p-2 text-xs text-center">{consult}</li>
        </ul>
        <div className="flex justify-center items-center">
        <button
            className={`m-4 py-4 w-full bg-red-500 text-white rounded-xl text-2xl ring-2 ring-slate-700 hover:bg-red-600  
                        focus:ring-2 focus:ring-red-400  ${
                          isMostPopular
                            ? 'bg-red-400 hover:bg-red-500 focus:ring-2 focus:ring-red-900 text-white'
                            : null
                        }`}
          >
            {contract}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
