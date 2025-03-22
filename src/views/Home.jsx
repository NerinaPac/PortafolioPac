import Nav from "../components/Nav/Nav"
import Presentacion from "../components/Presentacion/Presentacion";
import MouseCat from "../components/MouseCat/MouseCat";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import Data from "../data/data.json";
import Proyectos from "../components/Proyectos/Proyectos";

function Home (){

    const miData = Data;

    return(
        <>
            <MouseCat />
            <Nav />
            <Presentacion />            
            <Skills 
            infoSkill={miData.skills}
            />
            <Proyectos />
            <Footer />

        </>
    );

}

export default Home;