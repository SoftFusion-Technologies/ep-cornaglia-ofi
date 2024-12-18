import React from 'react';
import Header from '../Components/Header/Header';
import CardSection from '../Components/Cards/CardSection';

// import PricingCard from '../Components/PricingCard';
import Pricing from '../Components/Header/Pricing';
import Main from '../Components/Header/Main';
import Contact from '../Components/Contact';

import GestServicios from './GestServicios';
import InfoContacts from '../Components/Info/InfoContacts';
import HBOImages from '../Components/HBOImages';
import WhatsAppContact from '../Components/Info/WhatsAppContact';

const Home = () => {
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
