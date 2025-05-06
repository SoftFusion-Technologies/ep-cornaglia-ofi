import {
  FaHome,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function MiniNavbar() {
  return (
    <>
      {/* MiniNavbar Desktop */}
      <div className="hidden md:flex w-full bg-white/50 backdrop-blur-sm text-sm py-2 px-4 items-center justify-between shadow-sm sticky top-0 z-50 border-b border-gray-200">
        {/* Izquierda - Íconos sociales */}
        <div className="flex items-center space-x-3 text-gray-700">
          <a
            href="/"
            aria-label="Inicio"
            className="transition hover:-translate-y-1"
          >
            <FaHome size={16} />
          </a>
          {/* <a
            href="https://www.facebook.com/share/15pam24YBw/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition hover:-translate-y-1"
          >
            <FaFacebookF size={16} />
          </a> */}
          <a
            href="https://www.instagram.com/cornaglia.neumaticos.servicios/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition hover:-translate-y-1"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=543815673497&text=%C2%A1Hola!%0AMe%20gustar%C3%ADa%20hacer%20una%20consulta%3A"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition hover:-translate-y-1"
          >
            <FaWhatsapp size={16} />
          </a>
        </div>

        {/* Derecha - Teléfono y ubicación */}
        <div className="flex items-center space-x-4 text-gray-700">
          <a
            href="https://wa.me/543865239239"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Teléfono"
            className="flex items-center space-x-1 hover:text-green-600 transition"
          >
            <FaPhoneAlt size={14} />
            <span className="text-xs">+54 381 567-3497</span>
          </a>
          <a
            href="https://www.google.com/maps?q=Sarmiento+48,+Concepción"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ubicación"
            className="flex items-center space-x-1 hover:text-blue-600 transition"
          >
            <FaMapMarkerAlt size={14} />
            <span className="text-xs">
              Belgrano 376, Monteros
            </span>
          </a>
        </div>
      </div>

      {/* MiniNavbar Mobile - solo íconos sociales */}
      <div className="flex md:hidden w-full justify-center bg-white/50 backdrop-blur-sm py-2 px-4 shadow-sm text-gray-700 space-x-5 sticky top-0 z-50 border-b border-gray-200">
        <a
          href="/"
          aria-label="Inicio"
          className="transition hover:-translate-y-1"
        >
          <FaHome size={16} />
        </a>
        <a
          href="https://www.facebook.com/share/15pam24YBw/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="transition hover:-translate-y-1"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          href="https://www.instagram.com/conectate.group"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition hover:-translate-y-1"
        >
          <FaInstagram size={16} />
        </a>
        <a
          href="https://wa.me/543865239239"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="transition hover:-translate-y-1"
        >
          <FaWhatsapp size={16} />
        </a>
      </div>
    </>
  );
}
