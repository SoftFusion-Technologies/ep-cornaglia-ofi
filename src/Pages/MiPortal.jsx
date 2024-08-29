import React, { useEffect } from 'react';
import InfoContacts from '../Components/Info/InfoContacts';

const MiPortal = () => {
    useEffect(() => {
        // Desplaza la página al top cuando el componente se monta
        window.scrollTo(0, 0);
    }, []);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/+5493865239239?text=Hola, me gustaría gestionar mi cuenta.', '_blank');
    };

    return (
        <>
        <div className="flex justify-center items-center mt-24">
            <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full border border-gray-200">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Bienvenido a la sección de Tus Facturas</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">Si tienes tu usuario y contraseña, ingresa al siguiente enlace:</p>
                <a 
                    href="http://200.43.130.20/cliente/login" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-center text-blue-600 hover:text-blue-800 font-semibold underline mb-6"
                >
                    200.43.130.20/cliente/login
                </a>
                <p className="text-lg text-gray-700 mb-4 text-center">Si no tienes tu usuario y contraseña, puedes gestionarlo aquí:</p>
                <div className="flex justify-center">
                    <button 
                        onClick={handleWhatsAppClick} 
                        className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
                    >
                        Contactar por WhatsApp
                    </button>
                </div>
                </div>
                
            </div>
         <InfoContacts />
    </>
    );
};

export default MiPortal;
