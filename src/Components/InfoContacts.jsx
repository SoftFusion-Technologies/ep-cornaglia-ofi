import Sucursal from "./Sucursal";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa"
import PropTypes from 'prop-types';  


const WhatsAppLink = ({ number }) => (
    <a
        href={`https://wa.me/${number.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
    >
        <FaWhatsapp className="w-5 h-5 mr-1 text-green-500" />
    </a>
);

WhatsAppLink.propTypes = {
    number: PropTypes.string.isRequired  
};

const InfoContacts = () => {
    const sucursalesData = [
        {
          ciudad: 'Famailla',
          direccion: 'Belgrano 319',
          telefono: '3863-568662',
          horarios: 'Lun a Vie 08:00 a 13:00 / 17:00 a 21:00  Sabados 08:30 a 13:00',
        },
        {
          ciudad: 'Monteros',
          direccion: 'Rivadavia 184',
          telefono: '3863-690923',
          horarios: 'Lun a Vie 08:00 a 13:00 / 17:00 a 21:00  Sabados 08:30 a 13:00',
        },
        {
          ciudad: 'Simoca',
          direccion: 'Gomez Llueca 639',
          telefono: '3863-690062',
          horarios: 'Lun a Vie 08:00 a 13:00 / 17:00 a 21:00  Sabados 08:30 a 13:00',
        },
        {
          ciudad: 'La Cocha',
          direccion: 'San Martin 441',
          telefono: '3865-752418',
          horarios: 'Lun a Vie 08:00 a 13:00 / 17:00 a 21:00  Sabados 08:30 a 13:00',
        },
      ];
  return (
  <div className="container mx-auto p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Nuestras Oficinas</h1>
         <div className="bg-white p-10 mt-8 rounded-lg border border-gray-200">
            <h2 className='text-2xl font-bold text-gray-800'>Concepción</h2>
            <div className="mb-4">
            <p className="text-gray-600"><strong>Dirección:</strong> Sarmiento 48</p>
            <p className="text-gray-600"><strong>Horarios de Atención:</strong> Lun a Vie 08:00 a 13:00 / 17:00 a 21:00 - Sabados 08:30 a 13:00</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-gray-600 space-y-2">
                        <strong>Atención al Cliente:</strong>
                            <span className="flex items-center">
                                <a href="tel:+3865425787" className="flex items-center">
                                    <FaPhoneAlt className="w-5 h-5 text-gray-500 mr-2" />3865-425787
                                </a>
                            </span>
                            <span className="flex items-center">
                                <a href="tel:+3865423441" className="flex items-center">
                                    <FaPhoneAlt className="w-5 h-5 text-gray-500 mr-2" />3865-423441
                                </a>
                            </span>
                    </p>    
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-gray-600 space-y-2">
                        <strong>Servicio Técnico:</strong>
                        <span className="flex items-center">
                            <WhatsAppLink number="+5493865219096" />3865-219096
                        </span>
                        <span className="flex items-center">
                            <WhatsAppLink number="+5493865320780" />3865320780
                        </span>
                    </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                     <p className="text-gray-600 space-y-2">
                        <strong>Pagos y Facturas:</strong><br />
                        <span className="flex items-center">
                            <WhatsAppLink number="+5493865239239"/>3865-239239
                        </span> 
                    </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-gray-600 space-y-2">
                        <strong>Ventas:</strong><br />
                        <span className="flex items-center">
                            <WhatsAppLink number="+5493865266909"/>3865-266909
                        </span> 
                    </p>
                  </div>
            </div>
          </div>
          
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-10">
            {sucursalesData.map((sucursal, index) => (
            <Sucursal
                key={index}
                ciudad={sucursal.ciudad}
                direccion={sucursal.direccion}
                telefono={sucursal.telefono}
                horarios={sucursal.horarios}
            />
     ))}
       </div>
       <div className="bg-white p-10 mt-8 rounded-lg border border-gray-200">
            <h2 className='text-2xl font-bold text-gray-800'>Los Altos</h2>
            <div className="mb-4">
            <p className="text-gray-600"><strong>Dirección:</strong> Av. San Martín  270</p>
            <p className="text-gray-600"><strong>Horarios de Atención:</strong> Lun a Vie 08:00 a 13:00 / 17:00 a 21:00 - Sabados 08:00 a 13:00</p>
            <p className="text-gray-600"><strong>Teléfono:</strong>+54 9 3834 92-6725</p>
              </div>
            
        </div>
         
    </div>
);
};

export default InfoContacts