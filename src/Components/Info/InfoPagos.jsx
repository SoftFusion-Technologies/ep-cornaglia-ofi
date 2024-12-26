import InfoPagosCard from './InfoPagosCard';
import InfoPagosButtons from './InfoPagosButtons';
import { useEffect } from 'react';
import ImgInfoPagos from './ImgInfoPagos.webp';
const infoPagosCardProps = [
  {
    cardTitle: 'Acceso a Servicios',
    cardBody:
      'Gestioná tu consultá haciendo click en, suscripciones o actualizá tus datos.'
  },
  {
    cardTitle: 'Pagos y Facturas',
    cardBody:
      "Sección para vizualizar, descargar y abonar tus facturas. 1- Hace click en Mis Comprobantes. 2- Selecciona 'Ver' para descargar y 'pagar' para abonar la misma. 3- Hace click en el botón de SIRO y elegí el medio de pago que mas te guste."
  },
  {
    cardTitle: 'Reclamos y Feedback',
    cardBody:
      "Gestiona tus reclamos de forma directa y rapida. 1- Hace click en soporte técnico. 2- Selecciona 'nuevo ticket - soporte técnico'. 3- Hace click en la barra de abajo de 'asunto' y selecciona tu inconveniente. "
  }
];

const InfoPagos = () => {
  useEffect(() => {
    // Desplaza la página al top cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className="text-5xl text-center my-12 mt-32 uppercase font-bold">
        paso a paso
      </h1>
      <div className="flex justify-center items-center -mt-8">
        {/* el cliente pidio que se elimine accesos y servicios */}
        {/* <InfoPagosCard {...infoPagosCardProps[0]}></InfoPagosCard> */}
        {/* <InfoPagosCard {...infoPagosCardProps[1]}></InfoPagosCard>
            <InfoPagosCard {...infoPagosCardProps[2]}></InfoPagosCard> */}

        <img
          src={ImgInfoPagos}
          className="w-full max-w-md h-auto mb-2"
          alt="Info Pagos"
        />
      </div>
      <InfoPagosButtons></InfoPagosButtons>
    </>
  );
};
export default InfoPagos;
