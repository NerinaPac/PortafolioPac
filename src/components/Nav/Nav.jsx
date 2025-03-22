import {NavLink} from "react-router"
import "./Nav.css"

function Nav() {

    const itemNav = [
        { path: "/", label: "Skills" },
        { path: "/proyectos", label: "Proyectos" }
      ];

return(
     <nav>
        <ul>
            {itemNav.map((item, index) => (
                <li key={index}>
                    <NavLink className="navLink"  to={item.path} end> {item.label} </NavLink>
                </li>
            ))}
            
        </ul>
    </nav>
)

}

export default Nav;