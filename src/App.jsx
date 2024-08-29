import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';
import Separator from './Components/Separator';
import AnimCursor from './Components/Cursor'; 
import MiPortal from './Pages/MiPortal';

const App = () => {

  return (
    <Router>
      <AnimCursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/portal" element={<MiPortal></MiPortal>} />
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
      <Separator />
      <Footer />
    </Router>
  );
}

export default App
