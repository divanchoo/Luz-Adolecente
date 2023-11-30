import Nosotros from "../pages/Nosotros";
import logo0 from "../assets/Logo.png"
import imagen4 from "../assets/imagen4.png"
import imagen5 from "../assets/imagen5.png"
import { NavLink } from "react-router-dom";


const NosotrosFeatures = () => {
    return (
        <>
            <div className=" row featurette  p-4 p-md-5 mb-4 rounded text-body-emphasis">
                <div className="col-lg-6 px-0">
                    <h1 className="fs-1">¿Quiénes Somos?</h1>
                    <p className="lead my-3">Bienvenido a Luz adolescente, un espacio dedicado a la prevención del suicidio en adolescentes. En luz adolescente creemos en la importancia de brindar apoyo, información y recursos a la juventud para construir un futuro más saludable y esperanzador.</p>
                </div>
                <div className="col-md-5"><img src={logo0} height="300" width="auto" alt="..." /></div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Información Educativa</h3>
                            <p className="card-text mb-auto">Creemos en la importancia de la educación como herramienta para la prevención. Proporcionamos contenido claro y respaldado por expertos sobre la salud mental, señales de riesgo y estrategias de afrontamiento.</p>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src={imagen4} height="200" width="auto" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                             <h3 className="mb-0">Comunidad de Apoyo</h3>
                            <p className="mb-auto">Luz adolescente es más que una plataforma informativa; es un espacio interactivo donde los adolescentes pueden conectarse entre sí, compartir sus historias y encontrar apoyo mutuo.</p>
                           </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src={imagen5} height="200" width="auto" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NosotrosFeatures;