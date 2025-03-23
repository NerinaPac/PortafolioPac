import "./Presentacion.css";
import Contacto from "../Contacto/Contacto";

function Presentacion ({infoSobreMi}){

    return(
        
        <div className="presentacionContain">
            <div className="presentacionTexto">
                <h1 className="sigmar-regular respoTitle">{infoSobreMi.saludo}</h1>
                <p>{infoSobreMi.presentacion}</p>
                <Contacto />
            </div>
            <div className="presentacionImg">
                <img src={infoSobreMi.mifoto}  alt={infoSobreMi.descripcionImagen} />
            </div>

        </div>        
    )

}

export default Presentacion;