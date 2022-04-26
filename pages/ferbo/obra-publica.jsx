import { useEffect } from "react"
import withTransition from "@components/hoc/withTransition"


const ObraPublica = () => {
  const macyOptions = {
    container: '#macy-grid',
    trueOrder: true,
    mobileFirst: true,
    margin: 24,
    columns: 1,
    breakAt: {
      1000: 4,
      650: {
        margin: 40,
        columns: 2,
      },
    },
  }

  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.Macy = require('macy');

      new Macy(macyOptions)
    }
  }, [])

  return (
    <div className="inside-page">
      <h1 className="header">Palabras clave sobre el campo de trabajo</h1>
      <h2 className="sub-header">Descripcion del trabajo realizado, vision y mision del desarrollo de trabajos. Herramientas e innovacion en el trabajo.</h2>
      <div id="macy-grid"
        initial="hide"
        animate="show">
          <img src="/images/001_LR.jpg"></img>
          <img src="/images/002_LR.jpg"></img>
          <img src="/images/003_LR.jpg"></img>
          <img src="/images/004_LR.jpg"></img>
          <img src="/images/005_LR.jpg"></img>
          <img src="/images/006_LR.jpg"></img>
          <img src="/images/007_LR.jpg"></img>
          <img src="/images/008_LR.jpg"></img>
          <img src="/images/009_LR.jpg"></img>
          <img src="/images/0010_LR.jpg"></img>
        </div>
    </div>
  )
}

export default withTransition(ObraPublica, 'obra-publica')