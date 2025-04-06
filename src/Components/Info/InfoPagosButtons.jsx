import { Link } from 'react-router-dom';

const InfoPagosButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      <a
        href="http://200.43.130.21/cliente/login"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-white py-6 text-xl rounded-lg w-96 flex items-center justify-center"
      >
        {/* <span className="ml-4">Soy usuario - Acceder a mi cuenta</span> */}
        <span className="uppercase ">Acceder</span>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5493865239239&text=Hola"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-400 text-black py-6 text-xl rounded-lg w-96 flex items-center justify-center"
      >
        {/* <span>Nuevo usuario - Registrarme ahora</span> */}
        <span className="uppercase">Solicitar credenciales</span>
      </a>
    </div>
  );
};

export default InfoPagosButtons;
