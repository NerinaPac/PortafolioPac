import "./Proyectos.css";
import { Link } from "react-router-dom";

function Proyectos ({infoProyectos}) {

    return(
        <section className="proyectoSection" id="proyectosPac">
            <h2>PROYECTOS</h2>
            <div className="proyectosCnt">
                {infoProyectos.map((item, index) => (

                    <div className="proyecto" key={index}>
                        <Link to={item.link} target="_blank" rel="noopener noreferrer" className="proyectLink">
                        <img src={item.img} alt="Imagen del proyecto" className="proyectImg"/>
                        </Link>
                        <p className="textProyect">{item.reseña}</p>
                    </div>

                ))}               

            </div>
        </section>
    )
}

export default Proyectos;