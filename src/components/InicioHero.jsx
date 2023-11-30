import imagen3 from "../assets/imagen3.png"
const InicioHero = () => {
  return (
    <>
      <div className="row featurette p-4 p-md-5 mb-4 rounded ">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">La importancia del autocuidado:<span className="featurette-heading fw-normal lh-1">Prevención del suicidio en adolescentes</span></h2>
          <p className="lead">Cuidar de nuestra salud mental y de la de quienes nos rodean es importante en nuestras vidas.</p>
          <li className="marker fs-5">  Si te sientes atrapado, sin salida o no encuentras solución a tus problemas, necesitas ayuda.
          </li>
          <li className="marker fs-5">Es normal no sentirse bien todo el tiempo.</li>
          <li className="marker fs-5">Si te está ocurriendo algo lo puedes contar a quien confíes,No te quedes callado. </li>
          <li className="marker fs-5">Que alguien te oiga puede ser el primer paso para que empieces a encontrar soluciones. </li>
        </div>
        <div className="col-md-5">
          <img src={imagen3} className="" height="500" width="500" alt="..." />
        </div>
      </div>
    </>
  )
}
export default InicioHero;