import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router";
import "./Contacto.css";

function Contacto (){

    return(
        <div className='contactosContain'>
            <NavLink className="contactosRS"  to="https://github.com/NerinaPac" end><FontAwesomeIcon icon={faGithub} /></NavLink>
            <NavLink className="contactosRS"  to="https://github.com/NerinaPac" end><FontAwesomeIcon icon={faLinkedin} /></NavLink>
            <NavLink className="contactosRS"  to="https://wa.me/5493487308228" end><FontAwesomeIcon icon={faWhatsapp} /></NavLink>
            <NavLink className="contactosRS"  to="mailto:paccner@gmail.com" end><FontAwesomeIcon icon={faEnvelope} /></NavLink>

        </div>
    )
}


export default Contacto;