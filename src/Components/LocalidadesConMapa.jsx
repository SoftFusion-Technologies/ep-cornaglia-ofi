import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

// Icono personalizado
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32]
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const LocalidadCard = ({ nombre, lat, lng }) => (
  <div className="relative w-full h-56 rounded-3xl overflow-hidden shadow-xl group hover:scale-105 transition bg-white">
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full z-0"
      style={{ borderRadius: '1.5rem' }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon} />
    </MapContainer>
    <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-center py-2 font-semibold text-gray-800 z-10">
      {nombre}
    </div>
  </div>
);

const LocalidadesConMapa = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const zonas = [
    { nombre: 'Villa Quinteros', lat: -27.2529802, lng: -65.5494212 },
    { nombre: 'Río Seco', lat: -27.2674834, lng: -65.5592445 },
    { nombre: 'Arcadia', lat: -27.3061333, lng: -65.5770493 },
    { nombre: 'Simoca', lat: -27.267, lng: -65.333 },
    { nombre: 'Concepción', lat: -27.333, lng: -65.583 },
    { nombre: 'Trinidad', lat: -27.3999004, lng: -65.5169678 },
    { nombre: 'Medinas', lat: -27.4221631, lng: -65.5328764 },
    { nombre: 'Alto Verde', lat: -27.3784281, lng: -65.6085144 },
    { nombre: 'Alpachiri', lat: -27.3358846, lng: -65.7574617 },
    { nombre: 'Famaillá', lat: -27.05413, lng: -65.40329 },
    { nombre: 'Teniente Berdina', lat: -27.25, lng: -65.55 },
    { nombre: 'Iltico', lat: -27.25, lng: -65.55 },
    { nombre: 'Finca Cornet', lat: -27.25, lng: -65.55 },
    { nombre: 'Los Vallejos', lat: -27.25, lng: -65.55 },
    { nombre: 'Los Gucheas', lat: -27.39941, lng: -65.5734 },
    { nombre: 'Yucumanita', lat: -27.25, lng: -65.55 },
    { nombre: 'San Ramón', lat: -27.25, lng: -65.55 },
    { nombre: 'Piedra Grande', lat: -27.25, lng: -65.55 },
    { nombre: 'El Molino', lat: -27.25, lng: -65.55 },
    { nombre: 'León Rougés', lat: -27.25, lng: -65.55 },
    { nombre: 'Aguilares', lat: -27.433, lng: -65.617 },
    { nombre: 'La Cocha', lat: -27.783, lng: -65.6 },
    { nombre: 'Los Sarmientos', lat: -27.25, lng: -65.55 },
    { nombre: 'Santa Ana', lat: -27.25, lng: -65.55 },
    { nombre: 'Los Ríos', lat: -27.25, lng: -65.55 },
    { nombre: 'Soldado', lat: -27.25, lng: -65.55 },
    { nombre: 'Maldonado', lat: -27.25, lng: -65.55 },
    { nombre: 'Monteros', lat: -27.167, lng: -65.5 },
    { nombre: 'Villa Hileret', lat: -27.25, lng: -65.55 },
    { nombre: 'Río Chico', lat: -27.25, lng: -65.55 },
    { nombre: 'Los Altos', lat: -27.25, lng: -65.55 },
    { nombre: 'Ciudacita', lat: -27.25, lng: -65.55 },
    { nombre: 'Acheral', lat: -27.1208, lng: -65.4707 },
    { nombre: 'Capitán Cáceres', lat: -27.25, lng: -65.55 },
    { nombre: 'El Cercado', lat: -27.25, lng: -65.55 },
    { nombre: 'Rumi Punco', lat: -27.25, lng: -65.55 },
    { nombre: 'Monteagudo', lat: -27.25, lng: -65.55 },
    { nombre: 'Santa Lucía', lat: -27.25, lng: -65.55 }
  ];

  const handleVerMas = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const zonasVisibles = zonas.slice(0, visibleCount);

  return (
    <div id="donde" className="py-10 px-4 sm:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        ZONAS DE COBERTURA
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {zonasVisibles.map((zona, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <LocalidadCard nombre={zona.nombre} lat={zona.lat} lng={zona.lng} />
          </motion.div>
        ))}
      </div>
      {visibleCount < zonas.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleVerMas}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Ver más
          </button>
        </div>
      )}
    </div>
  );
};

export default LocalidadesConMapa;
