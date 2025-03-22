import "./Nav.css"

function Nav() {

    const itemNav = [
        { path: "#skillsPac", label: "Skills" },
        { path: "#proyectosPac", label: "Proyectos" }
      ];

return(
     <nav>
        <ul>
            {itemNav.map((item, index) => (
                <li key={index}>
                    <a className="navLink"  href={item.path} end> {item.label} </a>
                </li>
            ))}
            
        </ul>
    </nav>
)

}

export default Nav;