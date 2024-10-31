import InfoPagosButtons from './InfoPagosButtons';
import { useEffect } from 'react';
import ImgAsist from './ImgAsist.webp';

const AsistenciaTecnica = () => {
  useEffect(() => {
    // Desplaza la página al top cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className="text-5xl text-center my-12 mt-32 uppercase font-sans">
        Asistencia Técnica
      </h1>
      <div className="flex justify-center items-center -mt-8">
        {/* el cliente pidio que se elimine accesos y servicios */}
        {/* <InfoPagosCard {...infoPagosCardProps[0]}></InfoPagosCard> */}
        {/* <InfoPagosCard {...infoPagosCardProps[1]}></InfoPagosCard>
            <InfoPagosCard {...infoPagosCardProps[2]}></InfoPagosCard> */}

        <img
          src={ImgAsist}
          className="w-full max-w-md h-auto mb-2"
          alt="Info Pagos"
        />
      </div>
      <InfoPagosButtons></InfoPagosButtons>
    </>
  );
};
export default AsistenciaTecnica;
