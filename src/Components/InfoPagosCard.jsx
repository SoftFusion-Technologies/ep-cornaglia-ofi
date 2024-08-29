const InfoPagosCard = ({
    cardTitle = 'Titulo',
    cardBody = 'Cuerpo'
}) => {
    return <div className="w-72 mb-12 transform transition-transform duration-300 hover:scale-105">
    <h1 className="text-3xl text-center p-4 bg-slate-100 rounded-t-xl">{cardTitle}</h1>
    <p className="text-lg bg-slate-50 p-4 rounded-b-xl">{cardBody}</p>
    </div>

}

export default InfoPagosCard;