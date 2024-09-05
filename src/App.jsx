import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Header/Nav';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';
import Separator from './Components/Separator';
import AnimCursor from './Components/Cursor'; 
import MiPortal from './Pages/MiPortal';
import InfoPagos from './Components/Info/InfoPagos';
import WelcomeModal from './Components/WelcomeModal';
import welcomeImage from '../src/Images/imgWelcome.png';
import WhatsappBut from './Components/WhatsappBut';

import { useState } from 'react';
const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <WelcomeModal imageUrl={welcomeImage}  />
      <AnimCursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/portal" element={<InfoPagos></InfoPagos>} />
        <Route path='/autogestion' element={<InfoPagos/>}></Route>
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
      <Separator />
      <WhatsappBut />
      <Footer />
    </Router>
  );
}

export default App
