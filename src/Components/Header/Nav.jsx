import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Images/cornaglialogo.png';
import '../../Styles/nav.css';
import MiniNavbar from './MiniNavbar';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // para obtener ruta actual
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

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

  const scrollNeumaticos = () => {
    const element = document.getElementById('neumaticos');
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
  const scrollServicios = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollNosotros = () => {
    const element = document.getElementById('nosotros');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (destination) => {
    if (location.pathname === '/promociones') {
      // Si estamos en promociones, redirigimos al inicio y luego hacemos el scroll
      navigate('/');
      setTimeout(() => {
        // Una vez en la página principal, hacemos el scroll a la sección correspondiente
        switch (destination) {
          case 'inicio':
            scrollInicio();
            break;
          case 'neumaticos':
            scrollNeumaticos();
            break;
          case 'contact':
            scrollContact();
            break;
          case 'servicios':
            scrollServicios();
            break;
          case 'nosotros':
            scrollNosotros();
            break;
          default:
            break;
        }
      }, 100); // El tiempo de espera es para asegurarse de que el navigate haya ocurrido antes de hacer el scroll
    } else {
      // Si no estamos en promociones, directamente hacemos el scroll
      switch (destination) {
        case 'inicio':
          scrollInicio();
          break;
        case 'neumaticos':
          scrollNeumaticos();
          break;
        case 'contact':
          scrollContact();
          break;
        case 'servicios':
          scrollServicios();
          break;
        case 'nosotros':
          scrollNosotros();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Si se ha scrolleado más del 10% de la altura de la ventana,
      // o si la ruta actual no es la homepage ("/"), se marca como true.
      if (
        window.scrollY > window.innerHeight * 0.5 ||
        location.pathname !== '/'
      ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutamos el handler en el arranque por si ya se está scrolleando o no está en la home.
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className="bg-transparent fixed top-0 w-full z-50">
      <MiniNavbar />
      <div className="container mx-auto flex items-center justify-between p-1">
        {/* Menu alineado a al centro */}
        <div className="flex-1 flex justify-center pr-4">
          <button
            className="md:hidden text-white hover:text-red-500"
            onClick={handleMenuToggle}
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <ul className="hidden md:flex space-x-10">
            <li>
              <Link to="/">
                <button
                  onClick={() => handleNavClick('inicio')}
                  className={`text-2xl font-bold ${
                    location.pathname === '/a'
                      ? 'text-custom-blue border-b-4 border-custom-blue hover:border-red-500 hover:text-red-500'
                      : scrolled
                      ? 'text-gray-400 hover:border-b-4 hover:border-red-500 hover:text-red-500'
                      : 'text-white hover:border-b-4 hover:border-red-500 hover:text-red-500'
                  }`}
                  style={{ paddingBottom: '10px' }}
                >
                  INICIO
                </button>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => handleNavClick('servicios')}
                className={`text-2xl font-bold ${
                  location.pathname === '/servicios'
                    ? 'text-custom-blue border-b-4 border-custom-blue hover:border-red-500 hover:text-red-500'
                    : scrolled
                    ? 'text-gray-400 hover:border-b-4 hover:border-red-500 hover:text-red-500'
                    : 'text-white hover:border-b-4 hover:border-red-500 hover:text-red-500'
                }`}
                style={{ paddingBottom: '10px' }}
              >
                SERVICIOS
              </Link>
            </li>

            <li>
              <button
                onClick={() => handleNavClick('neumaticos')}
                className={`text-2xl font-bold ${
                  location.pathname === '/ss'
                    ? 'text-custom-blue border-b-4 border-custom-blue hover:border-red-500 hover:text-red-500'
                    : scrolled
                    ? 'text-gray-400 hover:border-b-4 hover:border-red-500 hover:text-red-500'
                    : 'text-white hover:border-b-4 hover:border-red-500 hover:text-red-500'
                }`}
                style={{
                  paddingBottom: '10px',
                  background: 'none',
                  // border: 'none',
                  cursor: 'pointer'
                }}
              >
                NEUMATICOS
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavClick('nosotros')}
                className={`text-2xl font-bold ${
                  location.pathname === '/ss'
                    ? 'text-custom-blue border-b-4 border-custom-blue hover:border-red-500 hover:text-red-500'
                    : scrolled
                    ? 'text-gray-400 hover:border-b-4 hover:border-red-500 hover:text-red-500'
                    : 'text-white hover:border-b-4 hover:border-red-500 hover:text-red-500'
                }`}
                style={{ paddingBottom: '10px' }}
              >
                NOSOTROS
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-2xl font-bold ${
                  location.pathname === '/ss'
                    ? 'text-custom-blue border-b-4 border-custom-blue hover:border-red-500 hover:text-red-500'
                    : scrolled
                    ? 'text-gray-400 hover:border-b-4 hover:border-red-500 hover:text-red-500'
                    : 'text-white hover:border-b-4 hover:border-red-500 hover:text-red-500'
                }`}
                style={{ paddingBottom: '10px' }}
              >
                CONTACTO
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black-80  z-50 flex justify-center items-center transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-red-500"
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
              onClick={() => handleNavClick('inicio')}
              className="text-[rgb(0,148,221)] text-xl font-bold hover:text-red-500"
            >
              INICIO
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('servicios')}
              className="text-white text-xl font-bold hover:text-red-500"
            >
              SERVICIOS
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavClick('neumaticos')}
              className="text-white text-xl font-bold hover:text-red-500"
            >
              NEUMATICOS
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('nosotros')}
              className="text-white text-xl font-bold hover:text-red-500"
            >
              NOSOTROS
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-white text-xl font-bold hover:text-red-500"
            >
              CONTACTO
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
