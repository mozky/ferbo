import withTransition from "@components/hoc/withTransition"

const Producto = () => (
  <div className="inside-page">
    <h1 className="header">Producto</h1>
    <h2 className="sub-header">Descripcion del trabajo realizado, vision y mision del desarrollo de trabajos. Herramientas e innovacion en el trabajo.</h2>
  </div>
)

export default withTransition(Producto, 'producto')