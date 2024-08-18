import React from 'react';
import '../Styles/header.css'; // Importación de CSS tradicional

const Header = () => {
  const handleScroll = () => {
    const element = document.getElementById('quienesSomos');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header">
      <div className="headerContent">
        <div className="w-full text-center text-black pt-10 lg:pt-32">
          <h1 className="title">¡INTERNET EN TODAS PARTES!</h1>
          <div className="flex justify-center items-center">
            <p className="description">
              Explora la libertad de navegar sin límites con Conectate WiFi.
              Descubre conexiones de alta calidad y servicios confiables desde{' '}
              <strong>Santiago del Estero Hasta Catamarca</strong>.
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
