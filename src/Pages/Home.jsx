import React from 'react'
import Header from '../Components/Header'
import CardSection from '../Components/CardSection';

// import PricingCard from '../Components/PricingCard';
import Pricing from '../Components/Pricing';
import Main from '../Components/Main';
import Contact from '../Components/Contact';

import GestServicios from './GestServicios';
import InfoContacts from '../Components/InfoContacts'; 

const Home = () => {
  return (
    <div>
      <Header></Header>
      <CardSection></CardSection>
      <Main></Main>
      <GestServicios></GestServicios>
      <InfoContacts></InfoContacts>
      <Pricing></Pricing>
      <Contact></Contact>
    </div>
  );
}

export default Home
