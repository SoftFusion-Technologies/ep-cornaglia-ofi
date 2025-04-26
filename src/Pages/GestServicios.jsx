import { Link } from 'react-router-dom';
import {
  FaCloudUploadAlt,
  FaFileInvoiceDollar,
  FaHeadset
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GestServicios = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/portal');
  };

  return (
    <div id="gestion">
      <div className="grid grid-cols-1 gap-6 pt-20 max-w-full">
        <div className="bg-gray-50 shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">GESTIONA TUS SERVICIOS</h3>
          <div className="mb-6">
            <p className="text-gray-600">
              <strong>Con Conectate Group</strong>, gestioná tus servicios desde
              donde quieras.
            </p>
          </div>

          <div className="flex justify-between bg-gray-100 p-6 overflow-hidden">
            <ul className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 w-full">
              {/* Servicio Administrativo */}
              <div className="relative group overflow-hidden flex items-center bg-white p-4 rounded-lg shadow-sm flex-grow hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
                {/* Mancha */}
                <div className="absolute w-20 h-20 bg-red-500 rounded-full bottom-0 right-0 transform translate-x-full translate-y-full scale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-[20] transition-all duration-[1000ms] ease-out"></div>

                <a
                  href="https://api.whatsapp.com/send?phone=5493865239239&text=Hola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 z-10"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <FaCloudUploadAlt size="2em" />
                  </div>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5493865239239&text=Hola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 z-10"
                >
                  <div>
                    <p className="text-lg font-medium text-black transition-colors duration-700 group-hover:text-white">
                      Servicio Administrativo
                    </p>
                  </div>
                </a>
              </div>

              {/* Servicio Técnico */}
              <div className="relative group overflow-hidden flex items-center bg-white p-4 rounded-lg shadow-sm flex-grow hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
                {/* Mancha */}
                <div className="absolute w-20 h-20 bg-red-500 rounded-full bottom-0 right-0 transform translate-x-full translate-y-full scale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-[20] transition-all duration-[1000ms] ease-out"></div>

                <Link to="/autogestion" className="flex-shrink-0 z-10">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <FaHeadset size="2em" />
                  </div>
                </Link>
                <Link
                  to="#"
                  onClick={() =>
                    window.open('https://wa.me/3865239239?text=Hola', '_blank')
                  }
                  className="ml-4 z-10"
                >
                  <div>
                    <p className="text-lg font-medium text-black transition-colors duration-700 group-hover:text-white">
                      Servicio técnico
                    </p>
                  </div>
                </Link>
              </div>

              {/* Pagos Electrónicos */}
              <div className="relative group overflow-hidden flex items-center bg-white p-4 rounded-lg shadow-sm flex-grow hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
                {/* Mancha */}
                <div className="absolute w-20 h-20 bg-red-500 rounded-full bottom-0 right-0 transform translate-x-full translate-y-full scale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-[20] transition-all duration-[1000ms] ease-out"></div>

                <Link to="/portal" className="flex-shrink-0 z-10">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <FaFileInvoiceDollar size="2em" />
                  </div>
                </Link>
                <div onClick={handleClick} className="ml-4 z-10">
                  <p className="text-lg font-medium text-black transition-colors duration-700 group-hover:text-white">
                    Pagos Electrónicos
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestServicios;
