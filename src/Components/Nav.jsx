import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.png'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-slate-100 shadow-md font-sans">
            <div className="container mx-auto flex items-center justify-between p-4">
                
             <div className="text-2xl font-bold">
                    <Link to="/">
                        <span><img className='Logo w-1/2 md:w-32 h-auto' src={Logo} alt="Logo" /></span>
                    </Link>
             </div>

                {/* Menu */}
               <div className="flex-1 flex justify-center">
                    <ul className="hidden md:flex space-x-10">
                        <li>
                            <Link to="/" className="text-gray-700 text-2xl font-bold hover:text-red-700">INICIO</Link>
                        </li>
                        <li>
                            <Link to="/prices" className="text-gray-700 text-2xl font-bold hover:text-red-700">PLANES</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-700 text-2xl font-bold hover:text-red-700">CONTACTO</Link>
                        </li>
                    </ul>
                </div>

                {/* Menu button*/}
                <button
                    className="md:hidden text-gray-700 hover:text-red-700"
                    onClick={handleMenuToggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-slate-100 z-50 flex justify-center items-center transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-red-700"
                    onClick={handleCloseMenu}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <ul className="space-y-4">
                    <li>
                        <Link to="/" className="text-gray-700 text-2xl font-bold hover:text-red-700">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/prices" className="text-gray-700 text-2xl font-bold hover:text-red-700">PLANES</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-700 text-2xl font-bold hover:text-red-700">CONTACTO</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;









