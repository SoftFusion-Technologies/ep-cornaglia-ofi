import React from 'react';
import FotoPerson from '../../Images/imgMain.webp';

const Main = () => {
  return (
    <div
      id="quienesSomos"
      className="flex flex-col md:flex-row items-center justify-center bg-white p-8 md:p-16"
    >
      {/* Contenedor de texto con fondo blanco, borde redondeado y altura mínima */}
      <div className="md:w-1/2 w-full text-center md:text-left animate__animated animate__fadeIn animate__delay-300ms rounded-lg bg-white p-6 shadow-lg min-h-[24rem] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-500ms">
          ¿QUIÉNES SOMOS?
        </h2>
        <p className="text-lg text-gray-600 mb-4 animate__animated animate__fadeIn animate__delay-700ms">
          En{' '}
          <strong className="text-red-600">
            CORNAGLIA NEUMÁTICOS Y SERVICIOS
          </strong>
          somos una empresa con más de 35 años de experiencia en la prestación
          de servicios automotrices, especializados en neumáticos y
          mantenimiento de vehículos. A lo largo de los años, hemos
          perfeccionado nuestras habilidades y tecnologías para ofrecer un
          servicio de alta calidad, confiable y eficiente.
        </p>
      </div>

      {/* Contenedor de imagen */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end mb-8 md:mb-0 md:mr-28">
        <img
          src={FotoPerson}
          alt="Conectate WiFi"
          className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl max-h-80 md:max-h-96 animate__animated animate__fadeIn animate__delay-1000ms"
        />
      </div>
    </div>
  );
};

export default Main;
