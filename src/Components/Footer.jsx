import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

const WhatsAppLink = ({ number }) => (
  <a
    href={`https://wa.me/${number.replace(/\D/g, '')}`}
    target="_blank"
    rel="noopener noreferrer"
    className="items-center"
  >
    Ir al WhatsApp
  </a>
);

WhatsAppLink.propTypes = {
  number: PropTypes.string.isRequired
};

const Footer = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          // Dejar de observar una vez que se ha añadido la clase
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Seleccionar los elementos a observar
    const footerLeft = document.querySelector('.footer-left');
    const socials = document.querySelector('.socials');
    const footerRightItems = document.querySelectorAll('.footer-right li');

    // Observar los elementos
    observer.observe(footerLeft);
    observer.observe(socials);
    footerRightItems.forEach((item) => observer.observe(item));

    // Limpieza del observer al desmontar el componente
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="titulo">CORNAGLIA NEUMÁTICOS Y SERVICIOS</h2>
        <p id="description-id" className="description">
          En Cornaglia nos especializamos en la reparación profesional de
          llantas, brindando soluciones duraderas y seguras. Combinamos
          experiencia, tecnología y compromiso para dejar tus llantas como
          nuevas.
        </p>

        <div className="socials">
          {/* <li>
            <a
              href="https://softfusion.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li> */}
          <li>
            <a
              href="https://www.instagram.com/cornaglia.neumaticos.servicios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://softfusion.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
        </div>
      </div>

      <ul className="footer-right">
        <li>
          <h2>Servicios</h2>
          <ul className="box">
            <li>
              <a href="#reparacion" target="_blank" rel="noopener noreferrer">
                Reparación de Llantas
              </a>
            </li>
            <li>
              <a href="#alineacion" target="_blank" rel="noopener noreferrer">
                Alineación y Balanceo
              </a>
            </li>
            <li>
              <a href="#venta" target="_blank" rel="noopener noreferrer">
                Venta de Llantas
              </a>
            </li>
            <li>
              <a href="#mecanica" target="_blank" rel="noopener noreferrer">
                Mecánica Ligera
              </a>
            </li>
          </ul>
        </li>

        <li>
          <h2>Información</h2>
          <ul className="box">
            <li>
              <a
                href="#quienes-somos"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¿Quiénes Somos?
              </a>
            </li>
            <li>
              <a href="#garantia" target="_blank" rel="noopener noreferrer">
                Garantía y Políticas
              </a>
            </li>
            <li>
              <a href="#clientes" target="_blank" rel="noopener noreferrer">
                Clientes Satisfechos
              </a>
            </li>
            <li>
              <a href="#preguntas" target="_blank" rel="noopener noreferrer">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </li>

        <li>
          <h2>Contáctanos</h2>
          <ul className="box">
            <li>
              <WhatsAppLink number="+5493865266909" />
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Cornaglia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Ubicación
              </a>
            </li>
            <li>
              <a
                href="mailto:info@cornaglia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar Correo
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="footer-bottom">
        <span>Este sitio web esta desarrollado por SoftFusion</span>
        <br />
        <span>
          <a
            href="https://softfusion.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2025 SoftFusion. All rights reserved.
          </a>
        </span>
        <span>Terms · Privacy Policy</span>
        <br />
      </div>
      <button
        className="fixed bottom-10 right-10 bg-black text-white p-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
};

export default Footer;
