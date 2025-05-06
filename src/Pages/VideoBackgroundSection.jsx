import React from 'react';
import video from '../Images/Hero_DSK.mp4';

const VideoBackgroundSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video} // Reemplaza con la URL de tu video
        type="video/mp4"
        muted
        loop
        autoPlay
      />

      {/* Capa oscura sobre el video para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenedor de texto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider uppercase mb-4 animate__animated animate__fadeIn animate__delay-300ms">
          ELIGE EL SERVICIO CORRECTO Y SIENTE LA DIFERENCIA
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase animate__animated animate__fadeIn animate__delay-500ms">
          ELEGÍ CORNAGLIA
        </p>
      </div>
    </div>
  );
};

export default VideoBackgroundSection;
