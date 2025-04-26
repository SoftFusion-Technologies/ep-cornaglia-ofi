import React from 'react';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaCreditCard,
  FaPhoneAlt,
  FaTools,
  FaComments
} from 'react-icons/fa';

const services = [
  { icon: <FaCreditCard />, label: 'Pagos y Facturación' },
  { icon: <FaPhoneAlt />, label: 'Consultas de Servicio' },
  { icon: <FaTools />, label: 'Problemas Técnicos' },
  { icon: <FaComments />, label: 'Soporte General' }
];

const WhatsAppContact = () => {
  const phoneNumber = '3865239239';
  const formattedNumber = `+54${phoneNumber}`;
  const whatsappLink = `https://wa.me/${formattedNumber}`;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-white/80 dark:bg-gray-800/70 backdrop-blur-lg border border-white/30 dark:border-gray-600/30 rounded-3xl shadow-2xl max-w-2xl w-full p-10 text-center"
      >
        <div className="flex flex-col items-center mb-8">
          <FaWhatsapp className="text-green-500 w-20 h-20 mb-6 animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-4">
            Soporte al Cliente
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            ¡Estoy listo para ayudarte! 🚀
          </p>
        </div>

        <ul className="text-left text-gray-600 dark:text-gray-400 text-lg space-y-6 mb-8 px-6">
          {services.map((service, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-green-500">{service.icon}</span>{' '}
              {service.label}
            </li>
          ))}
        </ul>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Iniciar conversación por WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-md"
        >
          <FaWhatsapp className="w-6 h-6" />
          Chatear al {phoneNumber}
        </motion.a>

        {/* Decoraciones ajustadas para dispositivos móviles */}
        <div className="absolute -top-3 -left-3 w-6 h-6 bg-green-300 rounded-full opacity-20 animate-bounce-slow md:w-20 md:h-20 md:opacity-20"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-green-400 rounded-full opacity-10 animate-ping md:w-24 md:h-24 md:opacity-10"></div>
      </motion.div>
    </div>
  );
};

export default WhatsAppContact;
