import { useEffect, useContext } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';
import { ContactContext } from '../context/ContactContext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const WhatsAppLink = ({ number }) => (
  <a
    href={`https://wa.me/${number.replace(/\D/g, '')}`}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-3 text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-2"
  >
    <span className="bg-red-600 p-2 rounded-lg group-hover:bg-red-500 transition-colors duration-300">
      <FaWhatsapp className="text-xl" />
    </span>
    ¡Chatea con nosotros!
  </a>
);

const Footer = () => {
  // Usa el contexto para abrir el modal de contacto
  const { setIsContactOpen } = useContext(ContactContext);
  const navigate = useNavigate();
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (to, adress) => {
    if (window.location.pathname !== `/${adress}`) {
      navigate(`/${adress}`);
      setTimeout(() => {
        const section = document.getElementById(to);
        if (section) {
          const offset = -100;
          const elementPosition =
            section.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 300);
    } else {
      const section = document.getElementById(to);
      if (section) {
        const offset = -100;
        const elementPosition =
          section.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      // url: 'https://www.facebook.com/turu.lescano',
      label: 'Facebook'
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/cornaglia.neumaticos.servicios/',
      label: 'Instagram'
    }
  ];

  const quickLinks = [
    {
      label: 'Neumáticos',
      onClick: () => handleScroll('neumaticos', ''),
      link: true
    },
    {
      label: 'Servicios',
      onClick: () => handleScroll('servicios', ''),
      link: true
    },
    {
      label: 'Nosotros',
      onClick: () => handleScroll('nosotros', ''),
      link: true
    },
    {
      label: 'Contacto',
      onClick: () => handleScroll('contact', ''),
      link: false
    }
  ];

  const contactInfo = [
    {
      icon: FaWhatsapp,
      label: '¡Chatea con nosotros!',
      href: 'https://wa.me/5493815673497',
      type: 'whatsapp'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Ver Ubicación',
      href: 'https://www.google.com/maps/place/CORNAGLIA+HIDRAULICA+Y+SERVICIOS/@-27.1710436,-65.5042189,17z/data=!3m1!4b1!4m6!3m5!1s0x9423cab62ae897f3:0xfcefd63cf4bdc5a6!8m2!3d-27.1710437!4d-65.4993534!16s%2Fg%2F11dyx52h1w?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D',
      type: 'link'
    },
    {
      icon: FaEnvelope,
      label: 'contacto@cornaglia.com',
      // href: 'mailto:contacto@turufitness.com',
      type: 'email'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300">
      <div className="h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              CORNAGLIA NEUMÁTICOS Y SERVICIOS
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-gray-300">
              En Cornaglia nos especializamos en la reparación profesional de
              llantas, brindando soluciones duraderas y seguras. Combinamos
              experiencia, tecnología y compromiso para dejar tus llantas como
              nuevas.{' '}
            </p>
            <h3 className="text-xl font-semibold text-white mb-2 relative">
              <span className="relative z-10">Visita nuestras redes</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={social.label}
                >
                  <div className="bg-gray-800 p-3 rounded-lg group-hover:bg-red-600 transition-all duration-300 transform hover:scale-110">
                    <social.icon className="text-2xl" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 animate-on-scroll">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              <span className="relative z-10">Enlaces Rápidos</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.link ? (
                    <RouterLink
                      to={link.href || '#'}
                      onClick={
                        link.onClick
                          ? (e) => {
                              e.preventDefault();
                              link.onClick();
                            }
                          : null
                      }
                      className="group flex items-center gap-3 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="h-1.5 w-1.5 bg-red-600 rounded-full group-hover:w-3 transition-all duration-300"></span>
                      {link.label}
                    </RouterLink>
                  ) : (
                    <a
                      href={link.href || '#'} // Usa `link.href` o un valor por defecto
                      onClick={
                        link.onClick
                          ? (e) => {
                              e.preventDefault(); // Evita el comportamiento por defecto
                              link.onClick(); // Ejecuta la función de scroll o modal
                            }
                          : null
                      }
                      className="group flex items-center gap-3 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="h-1.5 w-1.5 bg-red-600 rounded-full group-hover:w-3 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 animate-on-scroll">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              <span className="relative z-10">Contáctanos</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-6">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  {contact.type === 'whatsapp' ? (
                    <WhatsAppLink number={contact.href.split('wa.me/')[1]} />
                  ) : (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="bg-red-600 p-2 rounded-lg group-hover:bg-red-500 transition-colors duration-300">
                        <contact.icon className="text-xl" />
                      </span>
                      {contact.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center">
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
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-500 text-white p-4 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
