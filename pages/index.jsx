import Head from 'next/head'
import Image from 'next/image'

import PinterestIcon from '@components/PinterestIcon'
import YouTubeIcon from '@components/YouTubeIcon'
import BehanceIcon from '@components/BehanceIcon'


export default function Home() {
  return (
    <div>
      <Head>
        <meta name="author" content="moz@mozky.dev" />
        <title>Ferbo & Kappa</title>
        <script src="/app.js"></script>
      </Head>

      <div className="container">
        <main id="left-col"></main>
        <div id="col1">
          <img layout='fill' className="background-image" src="/images/background-house.jpg" />
        </div>
        <div id="col2"></div>
        <div id="col3"></div>
        <div id="col4" className="menu">
          <div id="ferbo-menu" className="menu-wrapper">
            <div className="logo">
              <img layout='fill' src="/images/ferbo.png" />
            </div>
            <ul>
              <li>
                <a className="navigation-button" type="button" href="obra-publica.html">
                  Obra Publica
                </a>

              </li>
              <li>Carpinteria</li>
              <li>Producto</li>
              <li>Equipo</li>
            </ul>
          </div>
        </div>
        <div id="col5" className="menu">
          <div id="mexha-menu" className="menu-wrapper">
            <div className="logo">
              <img layout='fill' src="/images/mexha.png" />
            </div>
            <ul>
              <li>Inmobilaria</li>
              <li>Residencial</li>
              <li>Habitacional</li>
            </ul>
          </div>
        </div>
        <footer id="footer">
          <div id="social">
            <div className="icons">
              <a href="#">
                <BehanceIcon />
              </a>
              <a href="#">
                 <PinterestIcon />
              </a>
              <a href="#">
                <YouTubeIcon />
              </a>
              <a href="#">
                {/* <svg height="22px" width="22px" fill="white" enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path d="M505,257c0,35.8,0.1,71.6,0,107.5c-0.2,52-24.4,90.5-67.6,117.7C412.1,498,384,505,354.2,505   c-65.2,0-130.3,0.3-195.5-0.1c-45.3-0.3-84.3-16.3-115.2-49.9c-19.1-20.8-30.5-45.3-33.8-73.6c-0.7-6-0.8-11.9-0.8-17.9   c0-71.3-0.1-142.6,0-213.9C9.2,97.5,33.4,59,76.6,31.8C102.1,15.9,130.3,9,160.3,9c65,0,130-0.3,195,0.1   c45.5,0.3,84.6,16.4,115.5,50.2c18.9,20.7,30.2,45.2,33.4,73.2c1.3,11,0.7,22,0.8,32.9C505.1,196,505,226.5,505,257z M46,257   c0,36.7-0.1,73.3,0,110c0.1,25.2,9.3,46.9,26.5,64.9c23.1,24.1,51.9,35.8,85,36c65.7,0.4,131.3,0.1,197,0.1   c21.2,0,41.4-4.6,59.8-15.2c34.4-19.7,53.8-48.7,53.8-89.3c0-72.2,0-144.3,0-216.5c0-25-9.1-46.6-26.2-64.5   c-22.9-24.2-51.8-36.1-84.8-36.3C290.7,45.7,224.4,46,158,46c-20.7,0-40.3,4.9-58.3,15.1C65.4,80.9,45.9,109.9,46,150.5   C46,186,46,221.5,46,257z" fill="white"/><path d="M257.3,363c-64.6,0-116.4-51.6-116.3-116c0.1-62.7,52.6-114.1,116.7-114c64.4,0,116.4,51.7,116.3,115.5   C373.9,311.7,321.6,363,257.3,363z M257.3,326c43.9,0,79.7-34.9,79.7-77.8c0-43.1-35.5-78.2-79.3-78.2c-43.9,0-79.7,34.9-79.7,77.8   C178,290.9,213.5,326,257.3,326z" fill="white"/><path d="M363,123.6c0-14.2,10.9-25.6,24.5-25.6c13.6,0,24.5,11.5,24.5,25.6c0,13.9-10.9,25.3-24.3,25.4   C374.1,149.1,363,137.8,363,123.6z" fill="white"/></g></svg> */}
              </a>
              <a href="#">
                {/* <svg height="22px" width="22px" fill="white" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z"/></svg> */}
              </a>
              <a href="#">
                {/* <svg height="25px" width="25px" fill="white" enable-background="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"/></svg> */}
              </a>
            </div>
          </div>
          <div className="menu-button" >
            <div id="ferbo-toggle">
              <Image width={60} height={110} src="/images/ferbo-logo.png" />
            </div>
          </div>
          <div className="menu-button">
            <div id="mexha-toggle">
              <Image width={90} height={70}  src="/images/mexha-logo.png" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}