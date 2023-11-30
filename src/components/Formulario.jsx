import { useState } from "react";
import logo0 from "../assets/Logo.png"

const Formulario = () => {

    const [Formulario, setFormulario] = useState({
        name: "",
        apellido: "",
        edad: "",
        description: "",

    });
    const { name, apellido, edad, description } = Formulario;

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const handleChange = (e) => {
        //const {name,description,state}=e.target;
        setFormulario({
            ...Formulario, [e.target.name]: e.target.value,
        })
    }
    return (
        <>
           <div className="container">
           <div className="d-flex justify-content-center"><img src={logo0}  height="80" width="80" alt="..."/></div>
           <h1>Busca Ayuda</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input  type="text"
                    placeholder="Nombre"
                    className="form-control mb-2"
                    name="name"
                    value={name}

                    onChange={handleChange} />
                <input type="text"
                    placeholder="Apellido"
                    className="form-control mb-2"
                    name="apellido"
                    value={apellido}
                    onChange={handleChange}
                />
                <input type="number"
                    placeholder="Edad"
                    className="form-control mb-2"
                    name="edad"
                    value={edad}
                    onChange={handleChange}
                />


                <textarea placeholder="¿Cómo te sientes?"
                    className="form-control mb-2"
                    name="description"
                    value={description}
                    onChange={handleChange}
                ></textarea>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
           </div>
        </>
    )
}
export default Formulario;