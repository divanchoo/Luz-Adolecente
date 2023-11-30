import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Footer from "./components/Footer";

const App = () => {
  return(
    <>
    <Navbar/>

    <Routes>
        <Route element={<Inicio />} path="/"></Route>
        <Route element={<Contacto />} path="/contacto"></Route>
        <Route element={<Nosotros />} path="/nosotros"></Route>
      
      </Routes>
      
      <Footer/>


    </>
  )
 }
 export default App;