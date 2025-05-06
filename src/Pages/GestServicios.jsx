import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs } from 'react-icons/fa'; // Icono para representaciones visuales
import img from '../Images/repair.svg';
import img2 from '../Images/imgalineado.webp';
import img3 from '../Images/llantas.svg';

const GestServicios = () => {
  return (
    <div id="servicios" className="w-full overflow-hidden">
      {/* Sección de título */}
      <motion.div
        className="w-full py-16 px-8 bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-md border border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-semibold text-center text-white tracking-wide">
          CONOCÉ LOS SERVICIOS QUE OFRECEMOS
        </h3>
      </motion.div>

      {/* Sección de contenido con animación */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between w-full py-12 px-6 bg-white"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Contenedor con imagen de fondo y texto encima */}
        <motion.div
          className="relative w-full min-h-[500px] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundAttachment: 'fixed' // Imagen fija al hacer scroll
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Capa oscura para mejorar la legibilidad */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Contenido encima de la imagen */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center lg:text-left lg:items-start">
            <motion.h1
              className="font-[Poppins], sans-serif font-bold text-[48px] sm:text-[56px] md:text-[64px] lg:text-[80px] xl:text-[96px] text-white leading-tight transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              ALINEADO Y BALANCEADO
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-white max-w-3xl mt-4 text-justify leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              El alineado y balanceado de ruedas es un servicio esencial para
              garantizar el buen rendimiento de tu vehículo. El alineado asegura
              que las ruedas estén correctamente orientadas, mejorando la
              estabilidad, reduciendo el desgaste irregular de los neumáticos y
              optimizando el manejo. Por otro lado, el balanceado ajusta el peso
              de las ruedas para que giren de manera uniforme, eliminando
              vibraciones y mejorando el confort durante la conducción.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Imagen adicional */}
      <motion.img
        src={img}
        alt="Servicios de reparación"
        className="mt-12 w-full h-[200px] md:h-[600px] lg:h-[700px] object-contain transform hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />

      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-8 md:p-16">
        {/* Contenedor de texto con fondo blanco, borde redondeado y altura mínima */}
        <div className="md:w-1/2 w-full text-center ml-20 md:text-left animate__animated animate__fadeIn animate__delay-300ms  bg-white p-6 min-h-[24rem] transition-transform duration-300 ease-in-out">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-500ms">
            REPARACIÓN DE LLANTAS
          </h2>
          <p className="text-lg text-gray-600 mb-4 animate__animated animate__fadeIn animate__delay-700ms">
            En{' '}
            <strong className="text-red-600">
              CORNAGLIA NEUMÁTICOS Y SERVICIOS
            </strong>{' '}
            nos especializamos en la reparación profesional de llantas,
            recuperando su forma y funcionalidad original. Corregimos golpes,
            grietas y deformaciones para garantizar tu seguridad y el óptimo
            desempeño del vehículo. Utilizamos tecnología de precisión para
            alinear y balancear correctamente, evitando vibraciones y desgaste
            irregular.
          </p>
        </div>

        {/* Contenedor de imagen */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end mb-8 md:mb-0 md:mr-28">
          <img
            src={img3}
            alt="Conectate WiFi"
            className="max-w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105  max-h-80 md:max-h-96 animate__animated animate__fadeIn animate__delay-1000ms"
          />
        </div>
      </div>

      {/* Sección de Servicios Extra */}
      <div className="py-10 px-4">
        <div className="text-center mb-8">
          <motion.h2 className=" uppercase text-3xl font-semibold text-gray-800">
            Otros Servicios Relacionados
          </motion.h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-2">
            Descubrí más sobre los servicios que tenemos para ti y asegurá el
            mejor rendimiento para tu vehículo.
          </p>
        </div>

        {/* Tarjetas de servicios */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Servicio 1 */}
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <FaCogs className="text-red-600 text-4xl" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Hidráulica
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Servicio completo de reparación y mantenimiento del sistema
              hidráulico para asegurar el rendimiento y la seguridad.
            </p>
          </motion.div>
          {/* Servicio 2 */}
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <FaCogs className="text-red-600 text-4xl" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Neumáticos
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Venta, instalación y revisión de neumáticos para garantizar un
              andar seguro y eficiente.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GestServicios;
