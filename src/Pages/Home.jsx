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

import New2 from '../Components/Header/New2';
import LocalidadesConMapa from '../Components/LocalidadesConMapa';
const Home = () => {

  return (
    <div>
      <Header></Header>
       {/* <CardSection></CardSection> */}
      <Main></Main>
      <New2></New2>
      {/* <Promociones></Promociones> */}
      <GestServicios></GestServicios>
      <WhatsAppContact></WhatsAppContact>
      <InfoContacts></InfoContacts>
      <Pricing></Pricing>
      <HBOImages />
      <LocalidadesConMapa></LocalidadesConMapa>
      <Contact></Contact>
    </div>
  );
};

export default Home;
