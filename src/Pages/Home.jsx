import { useEffect, useRef } from 'react';
import Header from '../Components/Header/Header';
import CardSection from '../Components/Cards/CardSection';
import { useNavigate } from 'react-router-dom';

// import PricingCard from '../Components/PricingCard';
import Pricing from '../Components/Header/Pricing';
import Main from '../Components/Header/Main';
import Contact from '../Components/Contact';

import GestServicios from './GestServicios';
import InfoContacts from '../Components/Info/InfoContacts';
import HBOImages from '../Components/HBOImages';
import WhatsAppContact from '../Components/Info/WhatsAppContact';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si ya se ha redirigido en esta sesión
    if (!localStorage.getItem('hasRedirected')) {
      const timer = setTimeout(() => {
        navigate('/promociones'); // Redirige a /promociones
        localStorage.setItem('hasRedirected', 'true'); // Marca que ya se ha redirigido
      }, 2000);

      return () => clearTimeout(timer); // Limpieza del temporizador
    }

    // Limpiar el localStorage cuando la página se cierre o se recargue
    const handleBeforeUnload = () => {
      localStorage.removeItem('hasRedirected');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup: Remover el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  return (
    <div>
      <Header></Header>
      <CardSection></CardSection>
      <Main></Main>
      <GestServicios></GestServicios>
      <WhatsAppContact></WhatsAppContact>
      <InfoContacts></InfoContacts>
      <Pricing></Pricing>
      <HBOImages />
      <Contact></Contact>
    </div>
  );
};

export default Home;
