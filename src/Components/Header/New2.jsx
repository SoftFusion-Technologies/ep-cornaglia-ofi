import React from 'react';
import imgConectate from '../../Images/siempre_conectado.jpg'; // Imagen para la sección "Permanece siempre conectado"
import imgAltaVelocidad from '../../Images/internetalta.webp'; // Imagen para la sección "Internet de alta velocidad"

const New2 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Sección 1: Permanece siempre conectado */}
      <div className="w-full max-w-7xl py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-left lg:w-1/2">
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Permanece siempre conectado
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              ¡No importa dónde estés! Con nuestra conexión, podrás estar
              siempre conectado a lo que más importa. Disfruta de una
              experiencia fluida y sin interrupciones en tus dispositivos
              favoritos.
            </p>
            <button className="bg-red-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-red-700 transition-all duration-300">
              Conéctate
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src={imgConectate}
              alt="Conéctate"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Sección 2: Internet de alta velocidad */}
      <div className="w-full max-w-7xl py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <img
              src={imgAltaVelocidad}
              alt="Internet de alta velocidad"
              className="w-full rounded-xl shadow-md"
            />
          </div>
          <div className="text-left lg:w-1/2">
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Internet de alta velocidad
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Navega a la velocidad de la luz. Con nuestra tecnología de última
              generación, disfrutarás de una conexión rápida, confiable y
              estable. Ideal para streaming, trabajo remoto, y lo que más te
              guste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New2;
