import React from 'react';
import '../css/popup.css';
import Linea from "../../public/Linea.png"

const PopupLogin = ({ onClose }) => {
  return (
    <div className='overlay'>
      <div className='contenedorPopup'>
        <span className='closeButton' onClick={onClose}>X</span>
        <div className='contenedorH3'>
          <h3>INICIAR SESION</h3>
          <img src={Linea} alt="" />
        </div>
        <form>
          <div className='contenedorRegister'>
            <div className='contenedorRegisterInp'>
              <input className='contInpInfo' type="email" placeholder='EMAIL' required />
            </div>
            <div className='contenedorRegisterInp'>
              <input className='contInpInfo' type="password" placeholder="CONTRASEÑA" required />
            </div>
          </div>
          <div className='loginButtonsCont'>
            <div className='loginButton'>
              <input type="submit" value="INGRESAR" />
            </div>
          </div>
        </form>
        <div className='contenedorP'>
          <img src={Linea} alt="" />
        </div>
      </div>
    </div>
  )
};

export default PopupLogin;
