import Nav from "../components/Nav/Nav"
import Presentacion from "../components/Presentacion/Presentacion";
import MouseCat from "../components/MouseCat/MouseCat";
import Footer from "../components/Footer/Footer"

function Home (){

    return(
        <>
            <Nav />
            <Presentacion />            
            <MouseCat />
            <Footer></Footer>

        </>
    );

}

export default Home;