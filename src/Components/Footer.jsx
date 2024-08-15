import { Link } from 'react-router-dom';
import "../Styles/Footer.css"
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-left">
            <h2 className="titulo">
                CONECTATE WIFI
            </h2>
            <p className="description">
            Brindamos conexiones de alta calidad a través de equipos de última tecnología.
            Nuestra misión es ofrecer a nuestros clientes un servicio de internet superior y confiable.
            </p>
            <div className="socials">
                <li><Link to="#"><FaFacebook /></Link></li>
                <li><Link to="#"><FaInstagram /></Link></li>
                <li><Link to="#"><FaTwitter /></Link></li>
            </div>
        </div>
        <ul className="footer-right">
            <li>
                <h2>Documentos</h2>
                <ul className="box">
                    <li><Link to="#">Planes</Link></li>
                    <li><Link to="#">Paginas Legales</Link></li>
                    <li><Link to="#">Documentos IFT</Link></li>
                    <li><Link to="#">Documentos PROFECO</Link></li>
                </ul>
            </li>

            <li>
                <h2>Otros Enlaces</h2>
                <ul className="box">
                    <li><Link to="#">Test de Velocidad</Link></li>
                    <li><Link to="#">Ver Cobertura</Link></li>
                    <li><Link to="#">Otros Servicios</Link></li>
                    <li><Link to="#">Ver Planes y Precios</Link></li>
                </ul>
            </li>

            <li>
                <h2>Contáctanos</h2>
                <ul className="box">
                    <li><Link to="#">3865 111111</Link></li>
                    <li><Link to="#">Ir al WhatsApp</Link></li>
                    <li><Link to="#">Ver Ubicación</Link></li>
                    <li><Link to="#">Sitio Web Lento?</Link></li>
                </ul>
            </li>
        </ul>
        <div className='footer-bottom'>
            <span>© 2023 SoftFusion. All rights reserved.</span>
            <span>Terms · Privacy Policy</span>
        </div>
    </footer>
  )
}

export default Footer
