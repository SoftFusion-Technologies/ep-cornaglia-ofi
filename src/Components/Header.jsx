import React from 'react';
import '../Styles/header.css'; // Importación de CSS tradicional

const Header = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <div className="w-full text-center text-black pt-10 lg:pt-32">
          <h1 className="title">¡Internet en todas partes!</h1>
          <div className="flex justify-center items-center">
            <p className="description">
              Explora la libertad de navegar sin límites con Conectate WiFi.
              Descubre conexiones de alta calidad y servicios confiables desde{' '}
              <strong>Santiago del Estero Hasta Catamarca</strong>.
            </p>
          </div>
          <div className="buttonContainer">
            <div className="w-[200px]">
              <button className="buttonHeader">Conócenos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
