import React, { useEffect, useState } from 'react';
import '../../Styles/header.css'; // Importación de CSS tradicional
import FondoHeader from '../../Images/NuevasImagenes/CONECTATE-64.webp';

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false); // Estado para controlar escritura/borrado
  const [charIndex, setCharIndex] = useState(0); // Índice del carácter actual
  const textToType = '¡INTERNET EN TODAS PARTES!';
  const typingSpeed = isDeleting ? 50 : 80; // Velocidad más rápida al borrar

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < textToType.length) {
        setTypedText(textToType.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(textToType.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === textToType.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de borrar
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false); // Cambiar a escribir después de borrar
      }
    };

    const typeInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typeInterval); // Limpiar timeout al desmontar
  }, [charIndex, isDeleting, textToType, typingSpeed]);

  const handleScroll = () => {
    const element = document.getElementById('quienesSomos');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="header mt-24 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${FondoHeader})` }}
      id="inicio"
    >
      <div className="headerContent">
        <div className="w-full text-center text-white pt-10 lg:pt-32">
          {/* Título con animación de tipeado y borrado */}
          <h1 className="title text-4xl md:text-6xl font-bold mb-6">
            {typedText}
            <span className="text-red-500 blinking-cursor">|</span>{' '}
          </h1>
          {/* Descripción con animación */}
          <div className="flex justify-center items-center">
            <p className="description text-lg md:text-2xl animate-slide-up">
              Explora la libertad de navegar sin límites con Conectate Group.
              Descubre conexiones de alta velocidad y servicios confiables desde
              <strong> Tucumán Hasta Catamarca</strong>.
            </p>
          </div>
          {/* Botón principal */}
          <div className="buttonContainer mt-6">
            <div className="w-[200px]">
              <button
                className="buttonHeader bg-red-500 text-white font-bold py-2 px-6 rounded shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
                onClick={handleScroll}
              >
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
