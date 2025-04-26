import React, { useEffect, useState } from 'react';
import FondoHeader from '../../Images/NuevasImagenes/CONECTATE-64.webp';

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Detectamos si es móvil

  const textToType = '¡INTERNET EN TODAS PARTES!';
  const typingSpeed = isDeleting ? 40 : 80;

  // Función para manejar el cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Actualizamos el estado
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Solo ejecutamos el efecto de tipeo en pantallas grandes
    if (isMobile) return; // No ejecutar en móviles

    const handleTyping = () => {
      if (!isDeleting && charIndex < textToType.length) {
        setTypedText(textToType.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(textToType.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === textToType.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    };

    const typeInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typeInterval);
  }, [charIndex, isDeleting, textToType, typingSpeed, isMobile]);

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
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Tipeo solo en dispositivos grandes */}
        <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 md:block hidden">
          {typedText}
          <span className="text-red-500 animate-blink">|</span>
        </h1>

        {/* Esta parte se muestra solo en móviles */}
        <h1 className="text-2xl font-bold text-white mb-6 md:hidden animate__animated animate__fadeInUp">
          {textToType}
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto transform opacity-100 animate-[slideUp_2s_ease-out]">
          Explora la libertad de navegar sin límites con{' '}
          <span className="text-red-500 font-semibold">Conectate Group</span>.
          Descubre conexiones de alta velocidad y servicios confiables desde{' '}
          <strong className="text-white">Tucumán hasta Catamarca</strong>.
        </p>

        <button
          onClick={handleScroll}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          Conócenos
        </button>
      </div>
    </section>
  );
};

export default Header;
