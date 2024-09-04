const InfoPagosCard = ({
    cardTitle = 'Titulo',
    cardBody = 'Cuerpo'
}) => {
  // Función para resaltar palabras clave en negrita
  const fNegritas = (text) => {
    return text.replace(/(SIRO|Mis Comprobantes|soporte técnico)/g, '<strong>$1</strong>');
  };

  // Si el cardBody contiene pasos, los convertimos en una lista
  const formatCardBody = (text) => {
    // Aplicamos la función de resaltado de palabras clave
    const highlightedText = fNegritas(text);

    return highlightedText.split(/\d-\s/).map((part, index) => {
      if (index === 0) {
        return <p key={index} dangerouslySetInnerHTML={{ __html: part.trim() }} />;
      }
      return (
        <li key={index} className="ml-4" dangerouslySetInnerHTML={{ __html: part.trim() }} />
      );
    });
  };
    return <div className="w-72 mb-12 transform transition-transform duration-300 hover:scale-105 flex flex-col">
      <h1 className="text-3xl text-center p-4 bg-slate-100 rounded-t-xl">{cardTitle}</h1>
      <div className="text-lg bg-slate-50 p-4 rounded-b-xl flex-grow">
        <ol className="list-decimal ml-4">
          {formatCardBody(cardBody)}
        </ol>
      </div>
    </div>

}

export default InfoPagosCard;