import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';

const App = () => {

  return (

    <Router>
      <Routes>
        <Route path="/" element= {
          
          <>
          <Nav/>
          </>
        }
        />
      </Routes>
    </Router>
  )
}

export default App
