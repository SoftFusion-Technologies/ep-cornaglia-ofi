import { Link } from 'react-router-dom';

const InfoPagosButtons = () => {
    return <div className="flex flex-wrap justify-center gap-6 mb-12">
        <a
            href="http://200.43.130.20/cliente/login" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-red-500 text-white py-6 text-xl rounded-lg w-96 ">
            <span className='ml-4'>
                Soy usuario - Acceder a mi cuenta
            </span>
        </a>
        <a
            href='https://api.whatsapp.com/send/?phone=%2B5493865239239&text=Hola%2C+me+gustar%C3%ADa+gestionar+mi+cuenta para el Portal.&type=phone_number&app_absent=0' target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-400 text-black py-6 text-xl rounded-lg w-96">
            <span className='ml-3'>
                Nuevo usuario - Registrarme ahora
            </span>
        </a>
    </div>
}

export default InfoPagosButtons;