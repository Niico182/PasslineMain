import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cocina1 from '../../public/cocina1.jpg';
import "../css/carrusel1.css"

function Carrucel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className= "carruselImgCont">
                  <img className='carruselIMg' src={Cocina1} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className= "carruselImgCont">
                  <img className='carruselIMg'  src={Cocina1} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className= "carruselImgCont">
                  <img className='carruselIMg'  src={Cocina1} alt="First slide" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrucel1;