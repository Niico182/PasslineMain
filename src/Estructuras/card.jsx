import React, { useState } from 'react';


const FechasComponent = ({ fechas, onFechaClick }) => {
    return (
        <div className='d-flex aling-items-center' style={{marginTop:"5%",}}>
            <ul>
                {fechas.map((fecha, index) => (
                    <li key={index} onClick={() => onFechaClick(fecha)}>
                     <img src="" alt="" />   {fecha.date} - Precio: {fecha.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Card = () => {
    const [showFechas, setShowFechas] = useState(false);
    const [fechasSeleccionadas, setFechasSeleccionadas] = useState([]);
    const gastosDeServicio = 0.15; // 15%

    const handleButtonClick = () => {
        setShowFechas(!showFechas);
    };

    const handleFechaClick = (fecha) => {
        const isSelected = fechasSeleccionadas.some((f) => f.date === fecha.date);
        if (isSelected) {
            const updatedFechas = fechasSeleccionadas.filter((f) => f.date !== fecha.date);
            setFechasSeleccionadas(updatedFechas);
        } else {
            setFechasSeleccionadas([...fechasSeleccionadas, fecha]);
        }
    };

    const calcularSubtotal = () => {
        const preciosSeleccionados = fechasSeleccionadas.map((fecha) => fecha.price);
        return preciosSeleccionados.reduce((acc, curr) => acc + curr, 0);
    };

    const calcularGastosDeServicio = () => {
        return calcularSubtotal() * gastosDeServicio;
    };

    const calcularTotalAPagar = () => {
        return calcularSubtotal() + calcularGastosDeServicio();
    };

    return (
        <div className='CardCompra'>
            <div className="card d-flex aling-items-center justify-content-center" style={{background: "#000", color: "#fff", width:"97%", borderRadius:"20px"}}>
                <button style={{width:"30%",height:"50px", margin:"auto", marginTop:"3%", background:"rgba(19, 22, 50, 1)", color:"#fff", border:"Solid 2px #000", borderRadius:"20px"}} onClick={handleButtonClick}>COMPRAR</button>
                {showFechas && (
                    <FechasComponent
                        fechas={[
                            { date: '23/7', price: 3000 },
                            { date: '28/8', price: 5000 },
                            { date: '25/7', price: 2000 },
                            { date: '23/8', price: 4000 },// Agrega más fechas con sus respectivos precios aquí
                        ]}
                        onFechaClick={handleFechaClick}
                    />
                )}
                <div className='d-flex aling-items-center justify-content-center flex-column mt-3 p-5'>
                    <div >
                        <h5>LA KONGA</h5>
                        <p>
                            LA KONGA regresa a Mar del Plata, al Teatro Tronador para presentar todos sus éxitos y compartir una noche inolvidable junto al público de esta hermosa ciudad que lo cobijó durante la última temporada de verano premiándolo con el Estrella de Mar de Oro.
                        </p>
                        <p>
                            Las funciones tendrán lugar los días 5, 6, 7, 11, 12, 13, 14, 18, 19, 20, 21 de Enero. Será un concierto inolvidable en el que el artista hará un recorrido por las canciones más populares de su carrera. Oncemil, La llave, Pájaro Cantor, Motivos, De solo vivir, Aventura, Cien Años, Espejo, El Amor en mi vida, El Hechizo, Piedra Libre, Abrazándonos, Sin principio ni final, serán algunos de los tantos clásicos que sonarán en esta noche especial.
                        </p>
                    </div>
                    <h3>Fechas Seleccionadas:</h3>
                    <ul>
                        {fechasSeleccionadas.map((fecha, index) => (
                            <li key={index}>{fecha.date} - Precio: {fecha.price}</li>
                        ))}
                    </ul>
                    <h3>Gastos de Servicio: {calcularGastosDeServicio()}</h3>
                    <h3>Total a Pagar: {calcularTotalAPagar()}</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;
