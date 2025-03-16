import "./Presentacion.css"
import miFoto from "../../assets/mifoto.jpg"
import data from "../../data/data.json"

function Presentacion (){

    const infoYo = data.sobreMi;
    console.log(infoYo)


    return(
        
        <div className="presentacionContain">
            <div className="presentacionTexto">
                <h1 className="sigmar-regular">{infoYo.saludo}</h1>
                <p>{infoYo.presentacion}</p>
            </div>
            <div className="presentacionImg">
                <img src={miFoto}  alt={infoYo.descripcionImagen} />
            </div>

        </div>        
    )

}

export default Presentacion;