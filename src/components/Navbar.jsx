import { NavLink } from "react-router-dom";
import logo0 from "../assets/Logo.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
                <div className="container-fluid ">
                    <div><img src={logo0}  height="70" width="70" alt="..."/></div>

                    <div className="collapse navbar-collapse justify-content-md-center" >
                        <ul className="navbar-nav">
                            <li className="">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            <li className="">
                                <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                            </li>
                            <li className="">
                                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;