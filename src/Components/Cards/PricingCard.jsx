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
    "Soporte técnico las 24 horas, los 7 días de la semana",
    "Canales locales",
    "Sin mínimo de permanencia"
  ],
  lastFeature = "Packs adicionales sin cargo",
  isMostPopular = false,
  consult = "Consultar promociones vigentes",
  zone = false,
  zoneConsult = "CONSULTAR ZONA DISPONIBLE",
}) => {
  function Month(props) {
    if (!props) return month
  }
  const month = <span className='text-xl'>/MES</span>
  return (
    <div
      className={`m-2 h-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl bg-gray-50 border border-gray-100 border-opacity-10 rounded-lg
            shadow-xl my-8 max-w-80 ${isMostPopular
          ? 'scale-105 transform z-10 bg-gray-200 m-5'
          : 'scale-95 transform'
        }`}
    >
      <div className="text-3xl font-semibold text-center">
        <h1 className="py-4 text-5xl ">{plan} </h1>
        <h2 className= {`pb-4 text-gray-700 ${zone ? 'text-xl leading-10' : 'text-4xl'}` } >{zone ? zoneConsult : price}{Month(zone)}</h2>
      </div>
      <div className="text-lg bg-gray-100 border-gray-200 border-opacity-10 rounded-lg shadow-xl py-4 ">

        <ul>
          <li className="p-2 font-bold">{mainFeature} <br></br>{channels}</li>
          <li className="p-2 pr-6">{featuresList[0]}</li>
          <li className="p-2">{featuresList[1]}</li>
          <li className="p-2">{featuresList[2]}</li>
          <li className="p-2 pr-6">{lastFeature}<br></br>{featuresList[3]}</li>
          <li className="p-2 text-xs text-center pt-6">{consult}</li>
        </ul>
        <div className="flex justify-center items-center">
          <a href="https://wa.me/5493865266909?text=%C2%A1Hola!%20me%20gustar%C3%ADa%20preguntarte%20acerca%20del%20mejor%20servicio%20para%20m%C3%AD."
            target='_blank'
            rel='noopener noreferrer'
            className='w-full'
          >
            <button
              className={`mt-4 py-4 w-full bg-red-500 text-white rounded-xl text-2xl ring-2 ring-slate-700 hover:bg-red-600  
                        focus:ring-2 focus:ring-red-400 font-semibold ${isMostPopular
                  ? 'bg-red-400 hover:bg-red-500 focus:ring-2 focus:ring-red-900 text-white'
                  : null
                }`}
            >
              CONTRATAR
            </button>
          </a>
        </div>
      </div>
    </div >
  );
};

export default PricingCard;
