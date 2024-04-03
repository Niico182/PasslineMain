import React, { useState } from 'react';
import "../css/entradasComp.css";
import Regular from "../../public/regular.png";
import Vip from "../../public/vip.png";

let valorDeEntrada1 = "$36.000";
let valorDeEntrada2 = "$62.000";

export default function EntradasComp() {
    const [selectedEntrada1, setSelectedEntrada1] = useState(false);
    const [selectedEntrada2, setSelectedEntrada2] = useState(false);

    const handleEntrada1Click = () => {
        setSelectedEntrada1(!selectedEntrada1);
        setSelectedEntrada2(false); // Deseleccionar la otra entrada
    };

    const handleEntrada2Click = () => {
        setSelectedEntrada2(!selectedEntrada2);
        setSelectedEntrada1(false); // Deseleccionar la otra entrada
    };

    return (
        <div className='entradasContainer'>
            <div className={`entradasSubCont ${selectedEntrada1 ? 'selected' : ''}`} onClick={handleEntrada1Click}>
                <div className='entradasContData'>
                    <div className='entradasContvalor'>
                        <img className='imgCont' src={Regular} alt="" />
                        <span className='valorDeEntrada'>{valorDeEntrada1}</span>
                    </div>
                </div>
                <div className='entradasContDataInfo'>
                    <p>ENTRADA REGULAR - UNA CONSUMISION INCLUIDA</p>
                </div>
            </div>
            <div className={`entradasSubCont2 ${selectedEntrada2 ? 'selected' : ''}`} onClick={handleEntrada2Click}>
                <div className='entradasContData2'>
                    <div className='entradasContvalor2'>
                        <img className='imgCont2' src={Vip} alt="" />
                        <span className='valorDeEntrada2'>{valorDeEntrada2}</span>
                    </div>
                </div>
                <div className='entradasContDataInfo2'>
                    <p>V.I.P-ZONAS EXCLUSIVAS-BENEFICIOS-CONSUMISIONES-ESTACIONAMIENTO-SERVICIOS VARIOS</p>
                </div>
            </div>
        </div>
    );
}
