import React from 'react';
import ".././css/perfil.css"

const PerfilData = ({ usuario, email, contraseña }) => {
  return (
    <div className="perfilDataContenedor">
      <div className="perfilDataSubCont">
        <div className="perfilData">
            <p className='pusuario'>Usuario: {usuario}</p>
            <p className='pemail'>Email: {email}</p>
            <p className='pcontraseña'>Contraseña: {contraseña}</p>          
        </div>
      </div>
    </div>
  );
};

export default PerfilData;
