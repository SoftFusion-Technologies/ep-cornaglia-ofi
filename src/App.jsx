import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';

const App = () => {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </Router>
  );
}

export default App
