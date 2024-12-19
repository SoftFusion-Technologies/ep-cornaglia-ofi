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
    '¿Qué hago si mi internet está lento?'
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
      <div className="bg-white rounded-xl p-6 w-96 max-w-4xl h-[600px] relative overflow-hidden">
        {/* Botón de cierre */}
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-700"
          onClick={closeModal}
        >
          &times; {/* Símbolo de cierre */}
        </button>

        <div className="mb-6 text-center">
          <h1 className="text-3xl text-red-500 font-semibold">
            Soporte Automático
          </h1>
        </div>

        {/* Historial de conversación */}
        <div
          className="h-64 overflow-y-auto mb-6 space-y-4"
          ref={chatContainerRef}
        >
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`text-sm px-4 py-2 rounded-lg ${
                chat.sender === 'user'
                  ? 'bg-blue-500 text-white text-right'
                  : 'bg-gray-200 text-left'
              }`}
            >
              {chat.message}
            </div>
          ))}
        </div>

        {/* Opciones de preguntas */}
        <div className="space-y-2 overflow-y-auto max-h-[200px]">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
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
