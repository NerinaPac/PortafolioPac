import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router";
import "./Contacto.css";

function Contacto (){

    return(
        <div>
            <NavLink className="navLink"  to="" end><FontAwesomeIcon icon={faLinkedin} /></NavLink>

        </div>
    )
}


export default Contacto;