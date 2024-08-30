import PropTypes from 'prop-types';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Sucursal = ({ ciudad, direccion, telefono, horarios }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200
                   hover:shadow-2xl focus:shadow-2xl active:shadow-xl
                   transition-shadow duration-300">
                      
    <h2 className='text-2xl font-bold text-gray-800'>{ciudad}</h2>
      <div className="text-gray-600 mt-1"><strong>Dirección:</strong> {direccion}</div>
          <div className="text-gray-600">
              <div className="flex items-center mt-2">
                  <strong>Teléfono:</strong>
                  <div className="flex items-center ml-1">
                      <span className="flex items-center">{telefono}</span>
                      <a href={`tel:${telefono.replace(/\D/g, '')}`}>
                         <FaPhoneAlt className="w-5 h-5 text-gray-500 ml-3" />
                      </a>
                      <a href={`https://wa.me/${telefono.replace(/\D/g, '')}`} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="flex items-center ml-2">
                         <FaWhatsapp className="w-6 h-6 ml-1 text-green-500" />
                      </a>
                  </div>
              </div>
      </div>  
    <div className="text-gray-600 mt-2"><strong>Horarios de Atención:</strong>
          <div className="flex items-center mt-1">
              {horarios}
          </div>
      </div>  
  </div>
);

Sucursal.propTypes = {
  ciudad: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  horarios: PropTypes.string.isRequired,
};

export default Sucursal;