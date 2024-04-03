import React from 'react';
import '../css/perfil.css';
import Perfilimg from "../../public/Perfil img.png";
import Perfilimg2 from "../../public/PerfilImg2.png";
import Qr from "../../public/qr 1.png";
import PerfilData from "../componentes/perfilComp";
import PerfilData2 from "../componentes/perfilComp2";
import Lapiz from "../../public/Lapiz.png";

export default function perfil() {
  return (
    <div className='profileContainer'>
      <div className='profileData'>
        <div className='profileImg'>
          <img src={Perfilimg} alt="" />
        </div>
        <div className='editProfileImg'>
          <input type="button" />
        </div>


        <div className='profileDataCont'>
          <div className='profileDataInfo'>
            <PerfilData
              usuario="usuario"
              email="usuario@email.com"
              contraseña="*********"
            />
          </div>
        </div>
      </div>
      <div className='profileContainer2'>
        <div className='profileData2'>
          <div className='profileH4'>
            <h4>HISTORIAL DE ENTRADAS</h4>
          </div>
          <div className='profileDataCont2'>

            <div className='profileImg2Cont'>
              <div className='profileImg2'>
                <img src={Perfilimg2} alt="" />
              </div>
            </div>
            <div className='profileDataContInfo'>
              <div className='profileDataInfo2'>
                <PerfilData2
                  evento="XXXXXX"
                  fecha="XX/XX/XXXX"
                  lugar="XXXXX"
                  entrada="XXXXXX"
                />
              </div>
              <div className='profileDataInfo3'>
                <img src={Qr} alt="" />
                <p>Descargar Entrada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
