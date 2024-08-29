import InfoPagosCard from "./InfoPagosCard"
import InfoPagosButtons from "./InfoPagosButtons"
import { useEffect } from "react";

const infoPagosCardProps = [
    {
        cardTitle: 'Acceso a Servicios',
        cardBody: 'Gestioná turnos, consultá promociones, suscripciones o actualizá tus datos.'
    },
    {
        cardTitle: "Pagos y Facturas",
        cardBody: "Sección para vizualizar facturas, realizar pagos y descargar comprobantes."
    },
    {
        cardTitle: "Reclamos y Feedback",
        cardBody: "Herramienta para reclamos, sugerencias o calificá los servicios recibidos."
    }
]


const InfoPagos = () => {
        useEffect(() => {
        // Desplaza la página al top cuando el componente se monta
        window.scrollTo(0, 0);
    }, []);
    return <>
        <h1 className="text-5xl text-center my-12 mt-28">
            Portal de Autogestión
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
            <InfoPagosCard {...infoPagosCardProps[0]}></InfoPagosCard>
            <InfoPagosCard {...infoPagosCardProps[1]}></InfoPagosCard>
            <InfoPagosCard {...infoPagosCardProps[2]}></InfoPagosCard>
        </div>
        <InfoPagosButtons></InfoPagosButtons>
    </>
}
export default InfoPagos