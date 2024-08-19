import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';
import Separator from './Components/Separator';

const App = () => {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
      <Separator />
      <Footer />
    </Router>
  );
}

export default App
