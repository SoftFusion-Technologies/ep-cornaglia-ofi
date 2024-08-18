import React from 'react'
import Header from '../Components/Header'
import CardSection from '../Components/CardSection';

import PricingCard from '../Components/PricingCard';
import Pricing from '../Components/Pricing';
const Home = () => {
  return (
    <div>
      <Header></Header>
      <CardSection></CardSection>
      <Pricing></Pricing>
    </div>
  );
}

export default Home