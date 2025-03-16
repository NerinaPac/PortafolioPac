import Nav from "../components/Nav/Nav"
import Presentacion from "../components/Presentacion/Presentacion";
import MouseCat from "../components/MouseCat/MouseCat";
import Contacto from "../components/Contacto/Contacto";

function Home (){

    return(
        <>
            <Nav />
            <Presentacion />
            <Contacto />
            <MouseCat />
        </>
    );

}

export default Home;