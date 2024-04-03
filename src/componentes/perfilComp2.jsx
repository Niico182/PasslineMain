import React from 'react';
import ".././css/perfil.css"

const PerfilData2 = ({ evento, fecha, lugar, entrada }) => {
  return (
    <div className="perfilDataContenedor2">
      <div className="perfilDataSubCont2">
        <div className="perfilData2">
            <p className='pevento'>Evento: {evento}</p>
            <p className='pfecha'>Fecha: {fecha}</p>
            <p className='plugar'>Lugar: {lugar}</p> 
            <p className='pentrada'>Entrada: {entrada}</p>          
        </div>
      </div>
    </div>
  );
};

export default PerfilData2;
