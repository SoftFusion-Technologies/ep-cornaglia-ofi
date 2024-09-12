import React from 'react';
import '../../Styles/header.css'; // Importación de CSS tradicional
import FondoHeader from '../../Images/NuevasImagenes/FondoHeader.webp'
const Header = () => {
  const handleScroll = () => {
    const element = document.getElementById('quienesSomos');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div
        className="header mt-24 bg-cover bg-center bg-no-repeat"
        id="inicio"
      >
        <div className="headerContent">
          <div className="w-full text-center text-white pt-10 lg:pt-32">
            <h1 className="title">¡INTERNET EN TODAS PARTES!</h1>
            <div className="flex justify-center items-center">
              <p className="description">
              Explora la libertad de navegar sin límites con Conectate Group. Descubre conexiones de alta velocidad y servicios confiables desde
              <strong> Tucumán Hasta Catamarca</strong>.
              </p>
            </div>
            <div className="buttonContainer">
              <div className="w-[200px]">
                <button className="buttonHeader" onClick={handleScroll}>
                  Conócenos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
