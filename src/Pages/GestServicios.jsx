import { Link } from 'react-router-dom';
import { FaCloudUploadAlt,FaFileInvoiceDollar, FaHeadset } from "react-icons/fa";

const GestServicios = () => {
  return (
    <div className='grid grid-cols-1 gap-6 pt-20'>
        <div className='bg-gray-50 shadow-md rounded-lg p-6'>
            <h3 className='text-2xl font-bold mb-4'>
                Gestiona tus servicios
            </h3>
            <div className='mb-6'>
                <p className='text-gray-600'>
                    <strong>Con Conectate Wifi</strong>, gestioná tus servicios desde donde quieras.
                </p>
            </div>
            <div className='flex justify-between bg-gray-100 p-6'>
                <ul className='space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 w-full'>
                    <li className='flex items-center bg-white p-4 rounded-lg shadow-sm flex-grow hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                        <Link to="#" className='flex-shrink-0'>
                            <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                                {<FaCloudUploadAlt size="2em"/>}
                            </div>
                        </Link>
                        <div className='ml-4'>
                            <p className='text-lg font-medium'>Mejorar mi plan</p>
                        </div>
                    </li>
                    <li className='flex items-center bg-white p-4 rounded-lg shadow-sm flex-grow hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                        <Link to="#" className='flex-shrink-0'>
                            <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                                {<FaFileInvoiceDollar size="2em"/>}
                            </div>
                        </Link>
                        <div className='ml-4'>
                            <p className='text-lg font-medium'>Mis facturas</p>
                        </div>
                    </li>
                    <li className='flex items-center bg-white p-4 rounded-lg shadow-sm flex-grow hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                        <Link to="#" className='flex-shrink-0'>
                            <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                                {<FaHeadset size="2em"/>}
                            </div>
                        </Link>
                        <div className='ml-4'>
                            <p className='text-lg font-medium'>Asistencia Técnica</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GestServicios