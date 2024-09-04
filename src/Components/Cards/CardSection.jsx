import React from 'react';
import Card from './Cards';
import '../../Styles/CardStyles.css';

const CardSection = () => {
  return (
    <div className="card-section">
      <Card
        icon=""
        title="Internet por fibra óptica"
        description="Con nuestro servicio podrás trabajar, jugar y lograr transmisiones en vivo de alta CALIDAD."
      />
      <Card
        icon=""
        title="Internet Wireless"
        description="La tecnología inalámbrica permite llegar a puntos de difícil acceso o zonas muy alejadas. Te CONECTAMOS donde estes."
      />
      <Card
        icon=""
        title="Servicio de TV"
        description="Tenemos una amplia grilla de canales y packs adicionales para que disfrutes de una experiencia  UNICA en familia."
      />
    </div>
  );
};

export default CardSection;
