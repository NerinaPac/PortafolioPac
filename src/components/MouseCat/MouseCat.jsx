import { useState, useEffect } from "react";
import "./MouseCat.css"
import gato from "../../assets/catmouse.png"

function MouseCat (){

    const [posicion, setPosicion] = useState({ x: 0, y: 0 });

    // Función para actualizar las coordenadas del mouse
    const manejarMovimientoMouse = (e) => {
      setPosicion({
        x: e.clientX,
        y: e.clientY
      });
    };
    console.log(posicion)

    useEffect(() => {
        window.addEventListener("mousemove", manejarMovimientoMouse)

        return() => {
            window.removeEventListener("mousemove", manejarMovimientoMouse)

        };

    }, []);

return(
      
        <div className="mouse"
        style={{ top: `${posicion.y - 20}px`, left:`${posicion.x - 20}px` }}>
            
            <img src={gato} alt="gatito" className="imgGatito" />

        </div>
)


}

export default MouseCat;