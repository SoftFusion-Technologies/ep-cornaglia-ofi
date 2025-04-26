import React, { useState, useEffect, useRef } from 'react';

const ChatBot = ({ closeModal }) => {
  // Estado para almacenar el historial de mensajes, incluye mensaje de bienvenida
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'bot',
      message:
        '¡Hola! Bienvenido al bot de Conectate Group. Estoy aquí para ayudarte con tus preguntas sobre nuestro servicio. Selecciona una opción.'
    }
  ]);

  // Referencia al contenedor del historial de mensajes
  const chatContainerRef = useRef(null);

  // Desplazamiento automático hacia el último mensaje
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Opciones de preguntas predefinidas
  const options = [
    '¿Cómo puedo pagar?',
    '¿Qué es el servicio de soporte técnico?',
    '¿Cómo puedo ver mi factura?',
    '¿Qué hago si mi internet está lento?',
    '¿Cuáles son nuestras redes sociales?',
    '¿Cómo puedo contactarlos?', // Nueva opción
    '¿Qué otros servicios ofrecen?' // Nueva opción
  ];

  // Respuestas predefinidas del bot
  const botResponses = {
    '¿Cómo puedo pagar?':
      'Puedes realizar el pago a través de nuestra plataforma en línea o por transferencia bancaria.',
    '¿Qué es el servicio de soporte técnico?':
      'Nuestro servicio de soporte técnico te ayuda a resolver problemas con el servicio de internet y equipos.',
    '¿Cómo puedo ver mi factura?':
      'Puedes consultar tu factura ingresando a tu cuenta en nuestro portal web.',
    '¿Qué hago si mi internet está lento?':
      'Te recomendamos reiniciar el modem. Si el problema persiste, contáctanos y lo revisaremos.',
    '¿Cuáles son nuestras redes sociales?':
      '¡Claro! Aquí te dejamos los enlaces a nuestras redes sociales:\n\n' +
      '<a href="https://www.instagram.com/conectate.group/" target="_blank" class="text-[#E1306C] font-semibold underline">Instagram: Conectate Group</a>' +
      '<br>' +
      '<a href="https://api.whatsapp.com/send/?phone=%2B543865239239&text&type=phone_number&app_absent=0" target="_blank" class="text-green-500 font-semibold underline">WhatsApp: Enviar mensaje</a>' +
      '<br>' +
      '<a href="https://www.facebook.com/share/1aKgmegVy3/?mibextid=wwXIfr" target="_blank" class="text-blue-600 font-semibold underline">Facebook: Conectate Group</a>',
    '¿Cómo puedo contactarlos?':
      'Puedes contactarnos a través de nuestras redes sociales o enviarnos un mensaje por WhatsApp.',
    '¿Qué otros servicios ofrecen?':
      'Ofrecemos los siguientes servicios:\n\n' +
      '1. **Instalación de WiFi**: Instalación de equipos para brindar conexión de alta calidad en tu hogar o empresa.\n' +
      '2. **Instalación de TV (Fibra Óptica)**: Instalación de servicios de TV mediante tecnología de fibra óptica para una mejor experiencia.',
    default: 'Lo siento, no entiendo esa pregunta. ¿Podrías reformularla?'
  };

  // Función para manejar el clic en las opciones
  const handleOptionClick = (message) => {
    // Agregar el mensaje del usuario al historial
    setChatHistory((prev) => [...prev, { sender: 'user', message }]);

    // Generar respuesta del bot
    const response = botResponses[message] || botResponses['default'];
    setChatHistory((prev) => [...prev, { sender: 'bot', message: response }]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-96 max-w-4xl h-[600px] relative overflow-hidden shadow-lg transform transition-all ease-in-out duration-300">
        {/* Botón de cierre */}
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-700 hover:text-red-600 transition-all"
          onClick={closeModal}
        >
          &times; {/* Símbolo de cierre */}
        </button>

        <div className="mb-6 text-center">
          <h1 className="text-3xl text-red-500 font-semibold tracking-tight">
            Soporte Automático
          </h1>
        </div>

        {/* Historial de conversación */}
        <div
          className="h-64 overflow-y-hidden mb-6 space-y-4" // Eliminado el scroll vertical
          ref={chatContainerRef}
        >
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`text-sm px-4 py-2 rounded-lg shadow-md transition-all ${
                chat.sender === 'user'
                  ? 'bg-blue-500 text-white text-right'
                  : 'bg-gray-200 text-left'
              }`}
              dangerouslySetInnerHTML={{ __html: chat.message }} // Permite que el HTML (enlaces) sea interpretado
            />
          ))}
        </div>

        {/* Opciones de preguntas */}
        <div className="space-y-2.5 overflow-x-hidden max-h-[200px]">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all transform hover:scale-105"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
