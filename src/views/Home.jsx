import {useState, useEffect} from "react";
import Nav from "../components/Nav/Nav"
import Presentacion from "../components/Presentacion/Presentacion";
import MouseCat from "../components/MouseCat/MouseCat";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import Data from "../data/data.json";

function Home (){

    const miData = Data;
    console.log(miData.skills)

    return(
        <>
            <Nav />
            <Presentacion />            
            <MouseCat />
            <Skills 
            infoSkill={miData.skills}
            />
            <Footer></Footer>

        </>
    );

}

export default Home;