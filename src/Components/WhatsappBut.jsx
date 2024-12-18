import React, { useState } from 'react';
import whatsappIcon from '../Images/LogoRosaBN.svg'; // Asegúrate de que la ruta de la imagen sea correcta
import { FaRobot } from 'react-icons/fa'; // Vamos a usar el ícono de robot de react-icons
import ChatBot from './Info/ChatBot'; // Asegúrate de tener el componente ChatBot creado previamente

function WhatsappBut() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar el modal

  const handleRobotClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Abre el modal del chatbot
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  const handleWhatsappClick = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado de <a>
    window.open('https://www.instagram.com/softfusiontechnologies/1', '_blank');
  };

  return (
    <div className="fixed bottom-20 right-7 z-50">
      {/* Icono de Robot */}
      <div className="mb-2 cursor-pointer" onClick={handleRobotClick}>
        <FaRobot className="w-12 h-12 text-blue-500 animate-bounce" />
      </div>

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

      {/* Modal del chatbot */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-5 w-96 max-w-4xl h-auto relative">
            {/* Aumento el ancho y ajusto el alto */}
            {/* Botón de cierre */}
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-700"
              onClick={handleCloseModal}
            >
              &times; {/* Símbolo de cierre */}
            </button>
            <ChatBot closeModal={handleCloseModal} />{' '}
            {/* Pasamos la función de cerrar al ChatBot */}
          </div>
        </div>
      )}
    </div>
  );
}

export default WhatsappBut;
