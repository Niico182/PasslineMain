import React, { useState } from 'react';
import "../css/fechasComp.css";

export default function FechasComp() {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (value) => {
        setSelectedButton(value);
    };

    return (
        <div className='fechasContainer'>
            <div className='fechasContData'>
                <p>ELIGE ENTRE LAS FECHAS DISPONIBLES</p>
                <div className='fechasContInp'>
                    <input
                        type="button"
                        value="17/01"
                        className={selectedButton === "17/01" ? "selected" : ""}
                        onClick={() => handleButtonClick("17/01")}
                    />
                </div>
                <div className='fechasContInp'>
                    <input
                        type="button"
                        value="21/01"
                        className={selectedButton === "21/01" ? "selected" : ""}
                        onClick={() => handleButtonClick("21/01")}
                    />
                </div>
                <div className='fechasContInp'>
                    <input
                        type="button"
                        value="28/01"
                        className={selectedButton === "28/01" ? "selected" : ""}
                        onClick={() => handleButtonClick("28/01")}
                    />
                </div>
                <div className='fechasContInp'>
                    <input
                        type="button"
                        value="02/02"
                        className={selectedButton === "02/02" ? "selected" : ""}
                        onClick={() => handleButtonClick("02/02")}
                    />
                </div>
            </div>
        </div>
    );
}
