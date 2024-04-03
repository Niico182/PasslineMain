import React, { useState } from "react";
import "../css/home.css";
import Carrucel1 from "../componentes/carrusel1";
import LaConga from "../../public/LaConga.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section>
                <div className="Principal">
                    <div className="PrincipalCont">
                        <div className="PrincipalImg">
                            <img src={LaConga} alt="" />
                        </div>
                        <div className="buttonVer">
                            <Link to="Entradas">Ver</Link>
                        </div>
                    </div>
                    <div className="PrincipalSearch">
                        <div className="searchInput">
                            <input type="search" placeholder="BUSCA EL EVENTO" />
                        </div>
                        <div className='searchSelect'>
                            <select className="selectCont" id="opciones" name="opciones">
                                <option value="opcion1">DEPORTES</option>
                                <option value="opcion2">MUSICA</option>
                                <option value="opcion3">TEATRO</option>
                                <option value="opcion4">INFANTILES</option>
                                <option value="opcion4">OTROS</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="divDone"></div>
                    <Carrucel1 />
                    <div className="divDone2"></div>
                </div>
                <div>
                </div>
            </section>
        </>
    )
}
