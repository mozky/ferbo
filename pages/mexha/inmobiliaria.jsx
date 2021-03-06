import withTransition from "@components/hoc/withTransition"

const Inmobiliaria = () => (
  <div className="inside-page">
    <h1 className="header">Inmobiliaria</h1>
    <h2 className="sub-header">Descripcion del trabajo realizado, vision y mision del desarrollo de trabajos. Herramientas e innovacion en el trabajo.</h2>
  </div>
)

export default withTransition(Inmobiliaria, 'inmobiliaria')