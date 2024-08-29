import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="relative mb-8">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center relative">
          <div className="absolute animate-ping rounded-full bg-blue-300 w-8 h-8"></div>
          <div className="absolute animate-ping rounded-full bg-blue-400 w-16 h-16"></div>
          <div className="absolute animate-ping rounded-full bg-blue-500 w-24 h-24"></div>
          <div className="z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12m-9 0a9 9 0 1118 0 9 9 0 01-18 0zM7.125 9.75a5.25 5.25 0 019.75 0m-8.563 3.5a2.625 2.625 0 016.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="text-lg mb-8 text-center px-6">
        Parece que te has desconectado. Verifica tu conexión a Internet o vuelve al inicio.
      </p>
      <a
        href="/"
        className="text-white bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  );
};

export default NotFound;
