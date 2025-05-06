import React, { useState, useEffect } from 'react';
import whatsappIcon from '../Images/LogoRosaBN.svg'; // Asegúrate de que la ruta de la imagen sea correcta

function WhatsappBut() {
  // Estado para controlar la visibilidad del mensaje
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Mostrar el mensaje después de 1 segundo
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000);

    // Limpiar el temporizador al desmontar
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsappClick = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado de <a>
    window.open('https://www.instagram.com/softfusiontechnologies/', '_blank');
  };

  return (
    <div className="fixed bottom-20 right-7 z-50">
      {/* Icono de WhatsApp */}
      <div>
        <a
          href="#"
          onClick={handleWhatsappClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16" />
        </a>
      </div>
    </div>
  );
}

export default WhatsappBut;
