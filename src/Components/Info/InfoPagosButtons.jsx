import { Link } from 'react-router-dom';

const InfoPagosButtons = () => {
    return <div className="flex flex-wrap justify-center gap-6 mb-12">
        <Link to="/portal">
        <button className="bg-red-500 text-white py-6 text-xl rounded-lg w-96 ">
            Soy usuario - Acceder a mi cuenta
        </button>
        </Link>
        <Link to="/portal">
            <button className="bg-gray-400 text-black py-6 text-xl rounded-lg w-96">
            Nuevo usuario - Registrarme ahora
            </button>
        </Link>
            
    </div>
}

export default InfoPagosButtons;