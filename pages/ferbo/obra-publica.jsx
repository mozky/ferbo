import { useEffect } from "react"
import withTransition from "@components/hoc/withTransition"

const Image = ({ src }) => {
  return <img style={{ maxWidth: 500 }} loading="lazy" src={src}></img>
}

const ObraPublica = () => {
  const macyOptions = {
    container: '#macy-grid',
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

  const images = []
  for (let i = 1; i <= 37; i++) {
    images.push(`/images/c1/00${i}_LR.jpg`)
  }

  return (
    <div className="inside-page">
      <h1 className="header">Palabras clave sobre el campo de trabajo</h1>
      <h2 className="sub-header">Descripcion del trabajo realizado, vision y mision del desarrollo de trabajos. Herramientas e innovacion en el trabajo.</h2>
      <div id="macy-grid">
        {images.map(img => {
          return <Image src={img} />
        })}
      </div>
    </div>
  )
}

export default withTransition(ObraPublica, 'obra-publica')