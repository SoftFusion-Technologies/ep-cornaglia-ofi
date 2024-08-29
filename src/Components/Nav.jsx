import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Images/Conectatelogo.png'
import '../Styles/nav.css'
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // para obtener ruta actual

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  
  const scrollInicio = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  };
  
  const scrollPlanes = () => {
    const element = document.getElementById('planes');
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const scrollContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const scrollGestion = () => {
    const element = document.getElementById('gestion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
      <nav className="bg-slate-100 shadow-md font-sans fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-1">
          <div className="text-1xl font-bold">
            <Link to="/">
              <span>
                <img
                  className="Logo w-20 md:w-20 h-auto"
                  src={Logo}
                  alt="Logo"
                  onClick={scrollInicio}
                />
              </span>
            </Link>
          </div>

          {/* Menu */}
          <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex space-x-10">
              <li>
                <Link to="/">
                <button
                  onClick={scrollInicio}
                  className={`text-2xl font-bold ${
                    location.pathname === '/'
                      ? 'text-custom-blue border-b-4 border-custom-blue hover:border-red-500 hover:text-red-500'
                      : 'text-gray-700 hover:border-b-4 hover:border-red-500 hover:text-red-500'
                  }`}
                  style={{
                    paddingBottom: '10px'
                  }}
                >
                  INICIO
                  </button>
                </Link>
                  
              </li>
  
              <li>
                <Link
                  // to="/gestion"
                  onClick={scrollGestion}
                  className={`text-2xl font-bold ${
                    location.pathname === '/gestion'
                      ? 'text-custom-blue border-b-4 border-custom-blue hover:border-red-500 hover:text-red-500'
                      : 'text-gray-700 hover:border-b-4 hover:border-red-500 hover:text-red-500'
                  }`}
                  style={{
                    paddingBottom: '10px'
                  }}
                >
                  GESTIÓN
                </Link>
              </li>
                <li>
                <button
                  onClick={scrollPlanes}
                  className={`text-2xl font-bold ${
                    location.pathname === '/ss'
                      ? 'text-custom-blue border-b-4 border-custom-blue hover:border-red-500 hover:text-red-500'
                      : 'text-gray-700 hover:border-b-4 hover:border-red-500 hover:text-red-500'
                  }`}
                  style={{
                    paddingBottom: '10px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  PLANES
                </button>
              </li>
              
              
              <li>
                <button
                  onClick={scrollContact}
                  className={`text-2xl font-bold ${
                    location.pathname === '/ss'
                      ? 'text-custom-blue border-b-4 border-custom-blue hover:border-red-500 hover:text-red-500'
                      : 'text-gray-700 hover:border-b-4 hover:border-red-500 hover:text-red-500'
                  }`}
                  style={{
                    paddingBottom: '10px'
                  }}
                >
                  CONTACTO
                </button>
              </li>
            </ul>
          </div>

          {/* Menu button*/}
          <button
            className="md:hidden text-gray-700 hover:text-red-500"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black-80  z-50 flex justify-center items-center transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-[rgb(0,148,221)] hover:text-red-500"
            onClick={handleCloseMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <ul className="flex flex-col items-center space-y-8">
            <li>
              <button
                onClick={scrollInicio}
                className="text-[rgb(0,148,221)] text-xl font-bold hover:text-red-500"
              >
                INICIO
              </button>
            </li>
          <li>
              <button
                onClick={scrollGestion}
                className="text-[rgb(0,148,221)] text-xl font-bold hover:text-red-500"
              >
                GESTION
              </button>
            </li>
            <li>
              <button
                onClick={scrollContact}
                className="text-[rgb(0,148,221)] text-xl font-bold hover:text-red-500"
              >
                CONTACTO
              </button>
            </li>
               <li>
              <button
                onClick={scrollPlanes}
                className="text-[rgb(0,148,221)] text-xl font-bold hover:text-red-500"
              >
                PLANES
              </button>
            </li>
        
          </ul>
        </div>
      </nav>
    );
};

export default Nav;