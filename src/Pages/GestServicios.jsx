import { Link } from 'react-router-dom';
import { FaCloudUploadAlt,FaFileInvoiceDollar, FaHeadset } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const GestServicios = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/portal');
    };
  return (
    <div className='grid grid-cols-1 gap-6 pt-20 max-w-full' id='gestion'>
        <div className='bg-gray-50 shadow-md rounded-lg p-6'>
            <h3 className='text-2xl font-bold mb-4'>
                Gestiona tus servicios
            </h3>
            <div className='mb-6'>
                <p className='text-gray-600'>
                    <strong>Con Conectate Wifi</strong>, gestioná tus servicios desde donde quieras.
                </p>
            </div>
            <div className='flex justify-between bg-gray-100 p-6 overflow-hidden'>
                <ul className='space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 w-full'>
                  <div className='flex items-center bg-white p-4 rounded-lg shadow-sm flex-grow hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                    <a
                        href="https://api.whatsapp.com/send?phone=5493865219096&text=Hola%20quiero%20modificar%20mi%20plan,%20mis%20datos%20son:%20TITULAR:%20(completar)%20DNI:%20(completar)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex-shrink-0'
                    >
                        <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                        <FaCloudUploadAlt size="2em" />
                        </div>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=5493865219096&text=Hola%20quiero%20modificar%20mi%20plan,%20mis%20datos%20son:%20TITULAR:%20(completar)%20DNI:%20(completar)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='ml-4'
                    >
                        <div>
                        <p className='text-lg font-medium'>Mejorar mi plan</p>
                        </div>
                    </a>
                    </div>


                    <div className='flex items-center bg-white p-4 rounded-lg shadow-sm flex-grow hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                        <Link to="/portal" className='flex-shrink-0'>
                            <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                                {<FaFileInvoiceDollar size="2em"/>}
                            </div>
                          </Link>
                        <div onClick={handleClick} className='ml-4 cursor-pointer'>
                            <p className='text-lg font-medium'>Mis facturas</p>
                        </div>
                    </div>
                    <div className='flex items-center bg-white p-4 rounded-lg shadow-sm flex-grow hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                        <Link to="/autogestion" className='flex-shrink-0'>
                            <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                                {<FaHeadset size="2em"/>}
                            </div>
                          </Link>
                          <Link to="/autogestion">
                        <div className='ml-4'>
                            <p className='text-lg font-medium'>Asistencia Técnica</p>
                              </div>
                          </Link>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GestServicios