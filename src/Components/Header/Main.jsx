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
          En <strong className="text-red-600">CONECTATE GROUP</strong> somos una
          empresa local que nació para resolver las necesidades de conexión en
          nuestro municipio y alrededores. Contamos con un equipo capacitado que
          instala servicios modernos y utiliza la última tecnología para
          garantizarte la mejor experiencia en internet.
          <span className="md:block">
            <strong className="text-red-600"> Hemos logrado </strong>extender
            nuestra cobertura a áreas rurales y de difícil acceso, como los
            cerros tucumanos, incluyendo zonas como el Indio. Tambien por
            Atahona y Monteagudo en la ciudad de Simoca. Esta expansión nos ha
            permitido llevar WiFi de alta calidad a lugares donde antes no
            llegaba, mejorando la conectividad de muchas familias y empresas.
          </span>
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
