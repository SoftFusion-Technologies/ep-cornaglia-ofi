import Header from '../Components/Header/Header';
import Main from '../Components/Header/Main';
import Contact from '../Components/Contact';

import GestServicios from './GestServicios';

import New2 from '../Components/Header/New2';
import VideoBackgroundSection from './VideoBackgroundSection';
import Nosotros from './Nosotros';
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <New2></New2>
      <VideoBackgroundSection />
      <GestServicios></GestServicios>
      <Nosotros />
      <Contact></Contact>
    </div>
  );
};

export default Home;
