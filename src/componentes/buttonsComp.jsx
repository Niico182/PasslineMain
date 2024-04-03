import React, { useState } from 'react';
import "../css/buttonsComp.css";
import FechasComp from './fechasComp';
import EntradasComp from './entradasComp';
import Popup from './PopupLogin';

export default function ButtonsComp() {
    const [showFechas, setShowFechas] = useState(true); // Cambiado a true
    const [showEntradas, setShowEntradas] = useState(false);

    const handleFechasClick = () => {
        setShowFechas(true);
        setShowEntradas(false);
    }

    const handleEntradasClick = () => {
        setShowEntradas(true);
        setShowFechas(false);
    }

    return (
        <div className='buttonsContainer'>
            <div className="buttonsContDiv">
                <div className='buttonsInp'>
                    <input type="button" value="FECHAS" onClick={handleFechasClick} />
                </div>
                <div className='buttonsInp'>
                    <input type="button" value="ENTRADAS" onClick={handleEntradasClick} />
                </div>
                <div className='buttonsInp'>
                    <input type="button" value="FINALIZAR"/>
                </div>
            </div>

            {showFechas && <FechasComp />}
            {showEntradas && <EntradasComp />}
            
            
        </div>
    );
}
