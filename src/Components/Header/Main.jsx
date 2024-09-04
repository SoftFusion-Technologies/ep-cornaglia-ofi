import React from 'react';
import FotoPerson from '../../Images/imgMain.webp'
const Main = () => {
  return (
    <div
      id="quienesSomos"
      className="flex flex-col md:flex-row items-center justify-center bg-white p-8 md:p-16"
    >
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          ¿QUIÉNES SOMOS?
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          En <strong>CONECTATE GROUP</strong> somos una empresa local que nació para resolver las
          necesidades de conexión en nuestro municipio y alrededores. Contamos
          con un equipo capacitado que instala servicios modernos y utiliza la
          última tecnología para garantizarte la mejor experiencia en internet.
        </p>
      </div>
     <div className="md:w-1/2 w-full flex justify-center md:justify-end mb-8 md:mb-0 md:mr-28">
      <img
        src={FotoPerson}
        alt="Conectate WiFi"
    className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl max-h-80 md:max-h-96"
      />
    </div>

    </div>
  );
};

export default Main;
