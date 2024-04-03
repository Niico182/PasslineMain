import React from "react";
import Card from "../Estructuras/card";
import Hero from "../../public/Hero.jpg"

export default function Show(props) {
    return(
        <>
        <section>
            <div>
                <img className="w-100 mb-2" src={Hero} alt="" />
            </div>
         <div>
            <Card/>
         </div>
         <div className="d-flex aling-items-center mt-5">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.984758594812!2d-58.428768356293794!3d-34.60425786076079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6d73459b81%3A0x8a7e8de50dd0046e!2sMuseo%20de%20Ciencias%20Naturales%20Bernardino%20Rivadavia!5e0!3m2!1ses!2sar!4v1704375558570!5m2!1ses!2sar" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
        </section>
        </>
    )
}