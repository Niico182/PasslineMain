import React, { useState } from 'react';
import "../css/ticketsComp.css";
import ButtonsComp from './buttonsComp';

export default function TicketsComp() {
    const [ticketsCompVisible, setTicketsCompVisible] = useState(true);
    const [buttonsCompVisible, setButtonsCompVisible] = useState(false);

    const hideTicketsComp = () => {
        setTicketsCompVisible(false);
        setButtonsCompVisible(true);
    };

    return (
        <div>
            {ticketsCompVisible && (
                <div className='ticketsInfoCont'>
                    <div className='ticketsInfoCompra'>
                        <div className='ticketsInfoCompraBtn'>
                            <div className='ticketsBtn1'>
                                <input type="button" value="VER TODAS LAS FECHAS" />
                            </div>
                            <div className='ticketsBtn2'>
                                <input type="button" value="PROXIMA FECHA" />
                            </div>
                        </div>
                        <div className='ticketsBtn3'>
                            <input type="button" value="COMPRAR" onClick={hideTicketsComp} />
                        </div>
                    </div>
                    <div className='ticketsData'>
                        <div className='ticketsDataP'>
                            <h5>LA KONGA</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam vero itaque iste, repellat ipsa ut mollitia cupiditate ullam assumenda nisi labore deserunt delectus consectetur illo architecto neque tenetur illum dolores.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquid, veritatis vitae dolorum quis earum labore quo a deserunt veniam repudiandae iusto inventore eum quibusdam consectetur. Earum iusto aliquam quaerat.</p>
                        </div>
                    </div>
                </div>
            )}
            {buttonsCompVisible && <ButtonsComp />}
        </div>
    );
}
