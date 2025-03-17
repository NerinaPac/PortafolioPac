import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "./Contacto.css";

function Contacto (){

    return(
        <div className='contactosContain'>
            <Link className="contactosRS"  to="https://github.com/NerinaPac" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link className="contactosRS"  to="https://www.linkedin.com/in/nerina-paccor-a28585249/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link className="contactosRS"  to="https://wa.me/5493487308228" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
            <Link className="contactosRS"  to="mailto:paccner@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
            </Link>

        </div>
    )
}


export default Contacto;