import React from 'react'
import LaConga from "../../public/LaConga.png";
import "../css/entradas.css"
import TicketsComp from '../componentes/ticketsComp';
import { Link } from 'react-router-dom';
import Flecha from "../../public/Left Arrow.png"

export default function entradas() {
    return (
        <div className='entradasCont'>
            <div className='entradasContImg'>
                <div className='imgCont1'>
                <img src={LaConga} alt="" />
                </div>
                <div className='buttonCont'>
                    <Link to="/"><img src={Flecha} alt="" /></Link>
                </div>
            </div>
            <TicketsComp></TicketsComp>
        </div> 
    )
}
