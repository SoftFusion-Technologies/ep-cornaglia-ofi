import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img404 from '../Images/imgBMW.webp'; // Reemplazá esto con la ruta real de tu imagen

const NotFound = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-black text-white px-6 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black opacity-60 z-0"></div>
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-700 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>

      {/* Texto */}
      <motion.div
        className="z-10 max-w-xl text-center lg:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-[80px] md:text-[100px] font-bold text-blue-500 drop-shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Página no encontrada
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Ups, esta ruta no existe. Quizás tomaste una curva equivocada...
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
          Volver al inicio
        </Link>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="z-10 mt-10 lg:mt-0 lg:ml-10 max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={img404}
          alt="Auto perdido"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default NotFound;
