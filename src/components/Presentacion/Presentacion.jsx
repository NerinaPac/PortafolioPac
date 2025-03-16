import "./Presentacion.css"
import miFoto from "../../assets/mifoto.jpg"

function Presentacion (){

    return(
        
        <div className="presentacionContain">
            <div className="presentacionTexto">
                <h1 className="sigmar-regular">Nerina Paccor</h1>
                <p>Delevoper Frontend en crecimiento</p>
            </div>
            <div className="presentacionImg">
                <img src={miFoto}  alt="foto de mi persona" />
            </div>

        </div>        
    )

}

export default Presentacion;