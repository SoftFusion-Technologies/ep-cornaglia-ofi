import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../Images/Promociones/imgPromo1.jpeg';
import img2 from '../Images/Promociones/imgPromo2.jpeg';
import img3 from '../Images/Promociones/imgPromo3.jpeg';
import img4 from '../Images/Promociones/imgPromo4.jpeg';

const Promociones = () => {
  useEffect(() => {
    // Cuando la ruta cambie, desplazamos la página al principio
    window.scrollTo({
      top: 0, // Desplazar al inicio
      behavior: 'smooth' // Desplazamiento suave
    });
  }, [location]); // Ejecuta cada vez que cambia la ruta

  const images = [img1, img2, img3, img4];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      {/* Título y descripción */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 mt-32">
          ¡Conoce nuestras promociones!
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Descubrí ofertas increíbles en nuestros servicios exclusivos. ¡No te
          lo pierdas!
        </p>
      </motion.div>

      {/* Contenedor de imágenes con efecto 3D */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {images.map((src, index) => {
          const isCenter = index === 1 || index === 2;
          const position =
            index === 0
              ? '-translate-x-8 sm:translate-x-0'
              : index === 3
              ? 'translate-x-8 sm:translate-x-0'
              : '';
          const zIndex = isCenter ? 'z-10' : 'z-0';

          return (
            <motion.div
              key={index}
              className={`relative mb-6 sm:w-full md:w-64 lg:w-72 xl:w-80 h-72 sm:h-80 md:h-96 lg:h-[450px] xl:h-[600px] rounded-lg shadow-lg overflow-hidden ${position} ${zIndex}`}
              initial={{ scale: isCenter ? 1 : 0.92, opacity: 0 }}
              animate={{ scale: isCenter ? 1.1 : 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{
                scale: 1.15,
                boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.2)',
                opacity: 0.8
              }}
            >
              <img
                src={src}
                alt={`Promoción ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Promociones;
