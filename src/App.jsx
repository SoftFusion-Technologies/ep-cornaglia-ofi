import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Header/Nav';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';
import Separator from './Components/Separator';
import AnimCursor from './Components/Cursor';
import MiPortal from './Pages/MiPortal';
import InfoPagos from './Components/Info/InfoPagos';
import AsistenciaTecnica from './Components/Info/AsistenciaTecnica';
import WelcomeModal from './Components/WelcomeModal';
import welcomeImage from '../src/Images/imgWelcome.png';
import WhatsappBut from './Components/WhatsappBut';
import ModalPromocion from './Components/ModalPromocion';

import React, { useState, useEffect } from 'react';
import Promociones from './Pages/Promociones';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Mostrar el modal después de 3 segundos
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);

  return (
    <Router>
      {/* {showModal && <WelcomeModal imageUrl={welcomeImage} />} */}
      {/* Se elimina el cursor animado por pedido del cliente */}
      {/* <AnimCursor /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/portal" element={<InfoPagos></InfoPagos>} />
        <Route path="/autogestion" element={<AsistenciaTecnica />}></Route>
        {/* <Route path="/promociones" element={<Promociones />}></Route> */}
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
      <Separator />
      <WhatsappBut />
      <Footer />
    </Router>
  );
};

export default App;
