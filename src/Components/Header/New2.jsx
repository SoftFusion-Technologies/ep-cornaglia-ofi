import React, { useEffect } from 'react';
import neumavideo from '../../Images/neumavideo.mp4'; // Ajustá el path si está en otra carpeta
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos';

const New2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="neumaticos"
      className="flex flex-col items-center justify-center p-4"
    >
      {/* Sección 2: Neumáticos de alta performance */}
      <div className="w-full max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <video
              src={neumavideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-h-[400px] object-contain"
            />
          </div>
          <div
            className="lg:w-1/2 w-full text-left p-8 md:p-16 bg-white shadow-lg rounded-lg max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
          >
            <p className="text-base md:text-lg text-gray-800 leading-relaxed font-poppins">
              Conducí con total confianza. Nuestros neumáticos están diseñados
              para ofrecer el máximo agarre, durabilidad y rendimiento tanto en
              ciudad como en ruta. Sentí la diferencia en cada kilómetro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New2;
