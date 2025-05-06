import React, { useEffect, useState } from 'react';
import FondoHeader from '../../Images/imgHeader.webp';

const Header = () => {
  const textToType = 'CORNAGLIA NEUMATICOS Y SERVICIOS';

  const handleScroll = () => {
    const element = document.getElementById('quienesSomos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoHeader})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Tipeo solo en dispositivos grandes */}
        <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 md:block hidden">
          CORNAGLIA NEUMATICOS Y SERVICIOS
          <span className="text-red-500 animate-blink">|</span>
        </h1>

        {/* Esta parte se muestra solo en móviles */}
        <h1 className="text-2xl font-bold text-white mb-6 md:hidden animate__animated animate__fadeInUp">
          {textToType}
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-[slideUp_2s_ease-out]">
          • Tren delantero • Alineado y balanceo • Hidráulica • Neumáticos •
          Reparación de llantas
          <br />
          <span className="text-red-500 font-semibold">📍 Belgrano 376</span> –
          Monteros, Tucumán 🇦🇷
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
