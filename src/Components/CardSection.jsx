import React from 'react';
import Card from './Cards';
import '../Styles/CardStyles.css';

const CardSection = () => {
  return (
    <div className="card-section">
      <Card
        icon="🚀"
        title="Internet de Alta Velocidad"
        description="Mantén videoconferencias fluidas y colabora en tiempo real, sin interrupciones."
      />
      <Card
        icon="📊"
        title="Tecnología de Punta"
        description="Disfruta de la mejor experiencia online con la tecnología más avanzada del mercado."
      />
      <Card
        icon="👨‍💻"
        title="Soporte Técnico"
        description="Un equipo de expertos está disponible para ayudarte a resolver cualquier problema técnico."
      />
    </div>
  );
};

export default CardSection;
