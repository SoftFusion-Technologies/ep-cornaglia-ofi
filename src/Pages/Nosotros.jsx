import React, { useEffect } from 'react';
import imgNosotros from '../Images/imgBMW.webp'; // Asegúrate de tener la imagen correcta
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Nosotros = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section id="nosotros" className="w-full bg-white py-24 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Texto */}
        <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-up">
          {/* Título */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            NOSOTROS
          </motion.h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600">
            En{' '}
            <span className="text-red-600 font-semibold">
              Cornaglia Neumáticos
            </span>
            , contamos con más de 35 años de experiencia brindando soluciones
            automotrices con excelencia.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-600">
            Nos destacamos por nuestro compromiso, calidad de atención y
            productos de primer nivel. Innovamos constantemente para
            garantizarte seguridad y confianza en cada visita.
          </p>
        </div>

        {/* Imagen */}
        <div
          className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md"
          data-aos="fade-left"
        >
          <img
            src={imgNosotros}
            alt="Nosotros"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
