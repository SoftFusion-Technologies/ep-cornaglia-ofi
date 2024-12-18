import React from 'react';

const WhatsAppContact = () => {
  const phoneNumber = '3865239239';
  const formattedNumber = `+54${phoneNumber}`; // Número con código de país (Argentina)
  const whatsappLink = `https://wa.me/${formattedNumber}`;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 p-5">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-xl p-10 text-center transition-all transform hover:scale-105 hover:shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-24 mb-4 transition-transform hover:scale-110"
          />
          <h1 className="text-4xl text-green-500 font-semibold mb-4">
            Soporte Automático al Cliente
          </h1>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          Estoy aquí para asistirte con los siguientes servicios:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
          <li>💳 Pagos y facturación</li>
          <li>📞 Consultas de servicio</li>
          <li>🔧 Problemas técnicos</li>
          <li>💬 Soporte general</li>
        </ul>
        <a
          href={whatsappLink}
          className="inline-block px-8 py-4 text-xl font-semibold text-white bg-green-500 rounded-lg transition-colors duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 Inicia una conversación en WhatsApp: {phoneNumber}
        </a>
      </div>
    </div>
  );
};

export default WhatsAppContact;
