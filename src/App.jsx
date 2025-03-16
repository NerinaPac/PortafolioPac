import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import './App.css'

function App() {
  AOS.init();
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Home />} />        
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
