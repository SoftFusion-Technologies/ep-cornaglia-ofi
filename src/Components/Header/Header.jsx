import React, { useEffect, useState } from 'react';
import FondoHeader from '../../Images/imgHeader.webp';

const Header = () => {
  const textToType = 'CORNAGLIA NEUMÁTICOS Y SERVICIOS';

  const handleScroll = () => {
    const element = document.getElementById('quienesSomos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${FondoHeader})`,
        backgroundSize: 'cover', // Para pantallas grandes
        backgroundPosition: 'center', // Centrado de la imagen
        backgroundAttachment: 'fixed' // Imagen fija al hacer scroll
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 text-center px-4 md:px-8">
        {/* Título grande en pantallas grandes */}
        <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 md:block hidden">
          {textToType}
          <br></br>
          <span className="text-red-500 animate-blink">|HACEMOS|</span>
        </h1>

        {/* Título en móviles */}
        <h1 className="text-2xl font-bold text-white mb-6 md:hidden animate__animated animate__fadeInUp">
          {textToType}
          <br></br>
          <span className="text-red-500 animate-blink">|HACEMOS|</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto text-center animate-[slideUp_2s_ease-out]">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-6 py-3 bg-gray-700 rounded-full text-white transition-all duration-300 transform hover:bg-red-500 hover:text-white hover:scale-105">
              Tren delantero
            </span>
            <span className="px-6 py-3 bg-gray-700 rounded-full text-white transition-all duration-300 transform hover:bg-red-500 hover:text-white hover:scale-105">
              Alineado y balanceo
            </span>
            <span className="px-6 py-3 bg-gray-700 rounded-full text-white transition-all duration-300 transform hover:bg-red-500 hover:text-white hover:scale-105">
              Hidráulica
            </span>
            <span className="px-6 py-3 bg-gray-700 rounded-full text-white transition-all duration-300 transform hover:bg-red-500 hover:text-white hover:scale-105">
              Neumáticos
            </span>
            <span className="px-6 py-3 bg-gray-700 rounded-full text-white transition-all duration-300 transform hover:bg-red-500 hover:text-white hover:scale-105">
              Reparación de llantas
            </span>
          </div>
          <span className="block mb-2">Belgrano 376</span>
          <span className="block">Monteros, Tucumán 🇦🇷</span>
        </p>
        <button
          onClick={handleScroll}
          className="uppercase bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          Conócenos
        </button>
      </div>
    </section>
  );
};

export default Header;
