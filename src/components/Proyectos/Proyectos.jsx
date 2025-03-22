import "./Proyectos.css"
import imgProyect from "../../assets/proyectoHombre.jpg";
import { Link } from "react-router-dom";

function Proyectos () {

    return(
        <section className="proyectoSection" id="proyectosPac">
            <h2>PROYECTOS</h2>
            <div className="proyectosCnt">
                <div className="proyecto">
                    <Link to="https://movimientohombre.netlify.app/" target="_blank" rel="noopener noreferrer" className="proyectLink">
                    <img src={imgProyect} alt="Imagen del proyecto" className="proyectImg"/>
                    </Link>
                    <p className="textProyect"> Es el primer proyecto que realice en el curso FullStack de UTN. Es una pagina estilo blog informativo. Está hecho con Angular.  </p>
                </div>

            </div>
        </section>

    )

}

export default Proyectos;