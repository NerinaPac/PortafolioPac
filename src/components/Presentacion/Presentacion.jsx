import "./Presentacion.css"
import miFoto from "../../assets/mifoto.jpg";
import data from "../../data/data.json";
import Contacto from "../Contacto/Contacto";

function Presentacion (){

    const infoYo = data.sobreMi;

    return(
        
        <div className="presentacionContain">
            <div className="presentacionTexto">
                <h1 className="sigmar-regular respoTitle">{infoYo.saludo}</h1>
                <p>{infoYo.presentacion}</p>
                <Contacto />

            </div>
            <div className="presentacionImg">
                <img src={miFoto}  alt={infoYo.descripcionImagen} />
            </div>

        </div>        
    )

}

export default Presentacion;